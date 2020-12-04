<template>
  <div class="home">
    <Logo></Logo>
    <hr class="divider" />
    <div
      id="background"
      ref="background"
      :style="{
        background:
          bgSrc == null
            ? 'linear-gradient(to top, rgba(150, 54, 148,.5), rgba(42, 42, 42, 1))'
            : 'linear-gradient(to top, rgba(0,0,0,0) 20%, rgba(43,43,43, 1)), url(' +
              bgSrc +
              ')',
      }"
      :class="{ hidden: bgHidden }"
    ></div>
    <nav>
      <div
        ref="video_link"
        :style="{
          visibility:
            video_link.display != 'none' && video_link.opacity == 1
              ? 'hidden'
              : 'visible',
        }"
        @mouseenter="setBackground('video')"
        @mouseleave="setBackground(null)"
        @click="changeRoute('/Video')"
        :class="{ hovered: video_link.hovered }"
      >
        <div :class="{ hovered: video_link.hovered }">
          <img :src="video_link.imageUri" />
        </div>
        <div style="pointer-events: none" class="badge">
          <span>Video</span>
        </div>
      </div>
      <div
        ref="images_link"
        :style="{
          visibility:
            images_link.display != 'none' && images_link.opacity == 1
              ? 'hidden'
              : 'visible',
        }"
        @mouseenter="setBackground('images')"
        @mouseleave="setBackground(null)"
        @click="changeRoute('/Images')"
        :class="{ hovered: images_link.hovered }"
      >
        <div :class="{ hovered: images_link.hovered }">
          <img :src="images_link.imageUri" />
        </div>
        <div style="pointer-events: none" class="badge">
          <span>Bilder</span>
        </div>
      </div>
      <div
        ref="information_link"
        :style="{
          visibility: information_link.display != 'none' ? 'hidden' : 'visible',
        }"
        @mouseenter="setBackground('information')"
        @mouseleave="setBackground(null)"
        @click="changeRoute('/Information')"
        :class="{ hovered: information_link.hovered }"
      >
        <div :class="{ hovered: information_link.hovered }">
          <img :src="information_link.imageUri" />
        </div>
        <div style="pointer-events: none" class="badge">
          <span>Informationen</span>
        </div>
      </div>
    </nav>
    <VideoComponent
      v-if="video_link.fullscreenHide"
      @close="hideVideoLink"
    ></VideoComponent>
    <div
      :class="{ animation_div: true, opened: video_link.top == 0 }"
      :style="{
        top: video_link.top + 'px',
        left: video_link.left + 'px',
        display: video_link.display,
        width: video_link.width,
        height: video_link.height,
      }"
      v-html="video_link.innerHTML"
    ></div>
    <ImagesComponent
      v-if="images_link.fullscreenHide"
      @close="hideImagesLink"
    ></ImagesComponent>
    <div
      :class="{ animation_div: true, opened: images_link.top == 0 }"
      :style="{
        top: images_link.top + 'px',
        left: images_link.left + 'px',
        display: images_link.display,
        width: images_link.width,
        height: images_link.height,
      }"
      v-html="images_link.innerHTML"
    ></div>
    <component
      :class="{ animation_div: true, opened: information_link.top == 0 }"
      :style="{
        top: information_link.top + 'px',
        left: information_link.left + 'px',
        display: information_link.display,
        width: information_link.width,
        height: information_link.height,
      }"
      :is="information_link.component"
      v-html="information_link.innerHTML"
    ></component>
  </div>
</template>

<script>
// import Vue from 'vue';
import VideoComponent from "@/components/Video.vue";
import ImagesComponent from "@/components/Images.vue";
import Logo from "@/components/Logo.vue";
export default {
  name: "Home",
  components: {
    Logo,
    VideoComponent,
    ImagesComponent,
  },
  data: () => ({
    bgSrc: null,
    bgHidden: false,
    timeout: null,
    video_link: {
      top: 0,
      left: 0,
      display: "none",
      width: "350px",
      height: "350px",
      innerHTML: "",
      component: "div",
      fullscreenHide: false,
      imageUri:
        "https://res.cloudinary.com/killtrot/image/upload/v1607067456/video_first_frame_aunt1a.png",
      hovered: false,
      opacity: 0,
    },
    images_link: {
      top: 0,
      left: 0,
      display: "none",
      width: "350px",
      height: "350px",
      innerHTML: "",
      component: "div",
      fullscreenHide: false,
      imageUri:
        "https://res.cloudinary.com/killtrot/image/upload/v1606903857/IMG_3837_ygrfwa.jpg",
      hovered: false,
    },
    information_link: {
      top: 0,
      left: 0,
      display: "none",
      width: "350px",
      height: "350px",
      innerHTML: "",
      component: "div",
      fullscreenHide: false,
      imageUri:
        "https://res.cloudinary.com/killtrot/image/upload/v1606903929/IMG_3801_yd0q69.jpg",
      hovered: false,
    },
  }),
  methods: {
    setBackground(uri) {
      this.bgHidden = true;
      switch (uri) {
        case null:
          if (
            this.video_link.display != "none" ||
            this.information_link.display != "none" ||
            this.images_link.display != "none"
          ) {
            return;
          } else {
            this.video_link.hovered = false;
            this.images_link.hovered = false;
            this.information_link.hovered = false;
            setTimeout(() => {
              this.bgHidden = false;
              this.bgSrc = null;
            }, 500);
          }
          break;
        case "video":
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.bgSrc = this.video_link.imageUri;
            this.bgHidden = false;
          }, 500);
          this.video_link.hovered = true;
          break;
        case "images":
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.bgSrc = this.images_link.imageUri;
            this.bgHidden = false;
          }, 500);
          this.images_link.hovered = true;
          break;
        case "information":
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.bgSrc = this.information_link.imageUri;
            this.bgHidden = false;
          }, 500);
          this.information_link.hovered = true;
          break;
      }
    },
    hideVideoLink() {
      this.$router.push("/").catch(() => {});
      this.video_link.fullscreenHide = false;
      setTimeout(() => {
        this.video_link.width = "350px";
        this.moveAnimationDivs();
        this.video_link.height = "350px";
        this.setBackground("video");
      }, 100);
      setTimeout(() => {
        this.video_link.opacity = 0.99;
        setTimeout(() => {
          this.video_link.display = "none";
        }, 500);
      }, 1250);
      setTimeout(() => {
        this.video_link.hovered = false;
      }, 1500);
    },
    hideImagesLink() {
      this.$router.push("/").catch(() => {});
      this.images_link.fullscreenHide = false;
      setTimeout(() => {
        this.images_link.width = "350px";
        this.moveAnimationDivs();
        this.images_link.height = "350px";
        this.setBackground("images");
      }, 100);
      setTimeout(() => {
        this.images_link.opacity = 0.99;
        setTimeout(() => {
          this.images_link.display = "none";
        }, 500);
      }, 1250);
      setTimeout(() => {
        this.images_link.hovered = false;
      }, 1500);
    },
    changeRoute(route) {
      this.$router.push(route).catch(()=> {});
      this.video_link.display = "none";
      this.information_link.display = "none";
      this.images_link.display = "none";
      switch (route) {
        case "/Video":
          this.video_link.opacity = 1;
          this.video_link.display = "block";
          this.video_link.innerHTML = this.$refs.video_link.innerHTML;
          setTimeout(() => {
            this.video_link.top = 0;
            this.video_link.left = 0;
            this.video_link.width = "100%";
            this.video_link.height = "100%";
          }, 250);
          setTimeout(() => {
            this.video_link.fullscreenHide = true;
          }, 1250);
          break;
        case "/Images":
          this.images_link.opacity = 1;
          this.images_link.display = "block";
          this.images_link.innerHTML = this.$refs.images_link.innerHTML;
          setTimeout(() => {
            this.images_link.top = 0;
            this.images_link.left = 0;
            this.images_link.width = "100%";
            this.images_link.height = "100%";
          }, 250);
          setTimeout(() => {
            this.images_link.fullscreenHide = true;
          }, 1250);
          break;
        case "/Information":
          this.information_link.display = "block";
          this.information_link.innerHTML = this.$refs.information_link.innerHTML;
          break;
      }
    },
    moveAnimationDivs() {
      this.video_link.top = this.$refs.video_link.getBoundingClientRect().top;
      this.video_link.left = this.$refs.video_link.getBoundingClientRect().left;
      this.images_link.top = this.$refs.images_link.getBoundingClientRect().top;
      this.images_link.left = this.$refs.images_link.getBoundingClientRect().left;
      this.information_link.top = this.$refs.information_link.getBoundingClientRect().top;
      this.information_link.left = this.$refs.information_link.getBoundingClientRect().left;
    },
  },
  watch: {
    $route: {
      handler(val, oldVal) {
        if (val == oldVal) return;
        this.$nextTick(() => {
          this.moveAnimationDivs();
          switch (val.path) {
            case "/":
              if (oldVal.path == "/Video") {
                this.hideVideoLink();
              } else if (oldVal.path == "/Images") {
                this.hideImagesLink();
              } else {
                this.hideInformationLink();
              }
              break;
            case "/Video":
              this.changeRoute("/Video");
              break;
            case "/Images":
              this.changeRoute("/Images");
              break;
            case "/Information":
              this.changeRoute("/Information");
              break;
          }
        });
      },
      immidiate: true
    },
  },
  mounted() {
    window.addEventListener("resize", this.moveAnimationDivs);
    this.$nextTick(() => {
      this.moveAnimationDivs();
      switch (this.$router.currentRoute.path) {
        case "/":
          // this.hideVideoLink();
          // this.hideImagesLink();
          // this.hideInformationLink();
          break;
        case "/Video":
          this.changeRoute("/Video");
          break;
        case "/Images":
          this.changeRoute("/Images");
          break;
        case "/Information":
          this.changeRoute("/Information");
          break;
      }
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.moveAnimationDivs);
  },
};
</script>

<style scoped lang="scss">
@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
.divider {
  margin: 0 auto;
  border: 1px solid lighten(#434343, 0.1%);
}
#background {
  width: 100%;
  height: calc(80vh - 2px);
  position: fixed;
  top: calc(20vh + 2px);
  left: 0;
  background-size: cover !important;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  &.hidden {
    opacity: 0;
  }
}
.animation_div {
  transition: left 1s ease, top 1s ease, width 1s ease, height 1s ease;
  position: absolute;
  z-index: 5;
  img {
    transition: all 1s;
    max-width: 100%;
    min-width: 350px;
    max-height: 350px;
    min-height: 350px;
    object-fit: cover;
    border-radius: 5px;
  }
  &.opened {
    div:not(.badge) {
      &::after {
        width: 0;
        height: 0;
      }
      img {
        min-width: 100vw;
        max-height: 100vh;
        min-height: 100vh;
        max-width: 100vw;
      }
    }
    .badge {
      transition: all 0.5s ease 0.5s;
      height: 0px;
      bottom: 0;
      * {
        display: none;
      }
    }
  }
  div:not(.badge) {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: relative;
    &::after {
      opacity: 1;
      transition: all 0.5s ease-in-out 0.5s;
      position: absolute;
      content: "";
      z-index: -1;
      top: calc(-1 * 5px);
      left: calc(-1 * 5px);
      width: calc(100% + 5px * 2);
      height: calc(100% + 5px * 2);
      background: linear-gradient(
        60deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
      );
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * 5px);
      animation: moveGradient 4s alternate infinite;
    }
  }
  .badge {
    position: relative;
    margin: 0 auto;
    bottom: 50px;
    height: 50px;
    width: 50%;
    background: white;
    text-align: center;
    border-radius: 5px;
    span {
      line-height: 55px;
      vertical-align: middle;
      font-family: Magneto;
      font-size: 1.3em;
    }
  }
}
nav {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  flex-wrap: wrap;
  z-index: 5;
  &.hovered img,
  &.hovered .badge {
    opacity: 0.1 !important;
  }
  div:not(#background) {
    height: 350px;
    width: 350px;
    margin: 10px;
    z-index: inherit;
    div:not(.badge) {
      margin: 0;
    }
    div:not(.badge).hovered img {
      border-radius: 5px;

      transition: border-radius 0.75s ease-in-out, filter 2s;
      opacity: 1 !important;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      filter: grayscale(0%);
    }
    div.hovered ~ .badge {
      opacity: 1 !important;
    }
    div:not(.badge).hovered::after {
      opacity: 1;
      transition: all 1s ease-in-out 0.5s;
    }
    div:not(.badge)::after {
      opacity: 0;
      transition: all 0.5s ease-in-out;
      position: absolute;
      content: "";
      z-index: -1;
      top: calc(-1 * 5px);
      left: calc(-1 * 5px);
      width: calc(100% + 5px * 2);
      height: calc(100% + 5px * 2);
      background: linear-gradient(
        60deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
      );
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * 5px);
      animation: moveGradient 4s alternate infinite;
    }
    div {
      position: relative;
    }
    img {
      border-radius: 200px;
      filter: grayscale(90%);
      height: 350px;
      width: auto;
      max-width: 350px;
      object-fit: cover;
      z-index: inherit;
      transition: border-radius 0.75s ease-in-out 0.5s, filter 2s;
    }
    .badge {
      position: relative;
      margin: 0 auto;
      bottom: 50px;
      height: 50px;
      width: 50%;
      background: white;
      text-align: center;
      border-radius: 5px;
      span {
        line-height: 55px;
        vertical-align: middle;
        font-family: Magneto;
        font-size: 1.3em;
      }
    }
  }
}
</style>
