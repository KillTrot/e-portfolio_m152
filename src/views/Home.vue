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
          visibility: video_link.display != 'none' ? 'hidden' : 'visible',
        }"
        @mouseenter="
          setBackground(
            'https://res.cloudinary.com/killtrot/image/upload/v1606901427/IMG_3814_d8jujt.jpg'
          )
        "
        @mouseleave="setBackground(null)"
        @click="changeRoute('/Video')"
      >
        <div>
          <img
            src="https://res.cloudinary.com/killtrot/image/upload/v1606901427/IMG_3814_d8jujt.jpg"
          />
        </div>
        <div style="pointer-events: none" class="badge">
          <span>Video</span>
        </div>
      </div>
      <div
        ref="images_link"
        :style="{
          visibility: images_link.display != 'none' ? 'hidden' : 'visible',
        }"
        @mouseenter="
          setBackground(
            'https://res.cloudinary.com/killtrot/image/upload/v1606903857/IMG_3837_ygrfwa.jpg'
          )
        "
        @mouseleave="setBackground(null)"
        @click="changeRoute('/Images')"
      >
        <div>
          <img
            src="https://res.cloudinary.com/killtrot/image/upload/v1606903857/IMG_3837_ygrfwa.jpg"
          />
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
        @mouseenter="
          setBackground(
            'https://res.cloudinary.com/killtrot/image/upload/v1606903929/IMG_3801_yd0q69.jpg'
          )
        "
        @mouseleave="setBackground(null)"
        @click="changeRoute('/Information')"
      >
        <div>
          <img
            src="https://res.cloudinary.com/killtrot/image/upload/v1606903929/IMG_3801_yd0q69.jpg"
          />
        </div>
        <div style="pointer-events: none" class="badge">
          <span>Informationen</span>
        </div>
      </div>
    </nav>
    <div
      class="animation_div"
      :style="{
        top: video_link.top + 'px',
        left: video_link.left + 'px',
        display: video_link.display,
      }"
    ></div>
    <div
      class="animation_div"
      :style="{
        top: images_link.top + 'px',
        left: images_link.left + 'px',
        display: images_link.display,
      }"
    ></div>
    <div
      class="animation_div"
      :style="{
        top: information_link.top + 'px',
        left: information_link.left + 'px',
        display: information_link.display,
      }"
    ></div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "Home",
  components: {
    Logo,
  },
  data: () => ({
    bgSrc: null,
    bgHidden: false,
    timeout: null,
    video_link: {
      top: 0,
      left: 0,
      display: "none",
    },
    images_link: {
      top: 0,
      left: 0,
      display: "none",
    },
    information_link: {
      top: 0,
      left: 0,
      display: "none",
    },
  }),
  methods: {
    setBackground(uri) {
      clearTimeout(this.timeout);
      this.bgHidden = true;
      this.timeout = setTimeout(() => {
        this.bgSrc = uri;
        this.bgHidden = false;
      }, 500);
    },
    changeRoute(route) {
      this.$router.push(route);
      this.video_link.display = "none";
      this.information_link.display = "none";
      this.images_link.display = "none";
      switch (route) {
        case "/Video":
          this.video_link.display = "block";
          break;
        case "/Images":
          this.images_link.display = "block";
          break;
        case "/Information":
          this.information_link.display = "block";
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
  mounted() {
    window.addEventListener("resize", this.moveAnimationDivs);
    this.$nextTick(() => {
      this.moveAnimationDivs();
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
.animation_div {
  background: red;
  width: 350px;
  height: 350px;
  position: absolute;
  z-index: 5;
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
nav {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  flex-wrap: wrap;
  z-index: 5;
  &:hover img,
  &:hover .badge {
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
    div:not(.badge):hover img {
      border-radius: 5px;

      transition: border-radius 0.75s ease-in-out, filter 2s;
      opacity: 1 !important;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      filter: grayscale(0%);
    }
    div:hover ~ .badge {
      opacity: 1 !important;
    }
    div:not(.badge):hover::after {
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
