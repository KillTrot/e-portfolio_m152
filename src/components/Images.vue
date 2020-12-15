<template>
  <div>
    <div class="close" @click="close" @mouseenter="showCloseIcon = true">
      <x-icon size="2.5x"></x-icon>
    </div>
    <div class="images">
      <VueCompareImage
        leftImage="https://res.cloudinary.com/killtrot/image/upload/v1606903929/IMG_3801_yd0q69.jpg"
        rightImage="https://res.cloudinary.com/killtrot/image/upload/v1608023845/IMG_3801_EDIT_fqz7ua.png"
      ></VueCompareImage>
      <div class="description">
        <span
          >Bei diesem Bild habe ich:
          <ul>
            <li>Vom Hintergrund die Farbtemperatur geändert</li>
            <li>Das Motiv verschoben, um die Drittelregel einzuhalten</li>
          </ul></span
        >
      </div>

      <VueCompareImage
        leftImage="https://source.unsplash.com/random/?car"
        rightImage="https://source.unsplash.com/random"
      ></VueCompareImage>

      <div class="description">
        <span
          >Bei diesem Bild habe ich:
          <ul>
            <li>Vom Hintergrund die Farbtemperatur geändert</li>
            <li>Das Motiv verschoben, um die Drittelregel einzuhalten</li>
          </ul></span
        >
      </div>
      <VueCompareImage
        leftImage="https://source.unsplash.com/random/car"
        rightImage="https://source.unsplash.com/random"
      ></VueCompareImage>
      <div class="description">
        <span
          >Bei diesem Bild habe ich:
          <ul>
            <li>Vom Hintergrund die Farbtemperatur geändert</li>
            <li>Das Motiv verschoben, um die Drittelregel einzuhalten</li>
          </ul></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
import VueCompareImage from "vue-compare-image";
export default {
  name: "Images",
  components: {
    XIcon,
    VueCompareImage,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
div {
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: linear-gradient(
    to top,
    rgba(150, 54, 148, 0.5),
    rgba(42, 42, 42, 1)
  );
  .images {
    display: block;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    div:not(.description) {
      position: relative;
      display: inline-block;
      margin: 15px 0 0 15%;
      width: 600px;
      height: 337.5px;
      max-width: 95%;
    }
    .description {
      position: relative;
      display: inline-block;
      width: 600px;
      margin: 0 auto;
      max-width: 95%;
      z-index: 1;
      height: 337.5px;
      overflow: hidden;
      span {
        position: absolute;
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        background: linear-gradient(
          to top,
          rgba(150, 54, 148, 0.5),
          rgba(42, 42, 42, 1)
        );
        top: 5px;
        left: 5px;
        color: white;
        padding: 5px;
      }
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
        animation: moveGradient 8s alternate infinite;
      }
    }
  }
  .close {
    padding: 5px;
    border-radius: 10px;
    padding-bottom: 1px;
    background: #434343;
    position: absolute;
    top: 10px;
    left: 10px;
    width: auto;
    height: auto;
    * {
      color: white;
      z-index: 103;
    }
    z-index: 102;
  }
}

@media screen and (max-width: 400px) {
  div {
    .images {
      div:not(.description) {
        margin: auto;
      }
      .description {
        margin: auto;
      }
    }
  }
}
</style>

<style lang="scss">
.right-image {
  object-fit: cover;
  min-height: 100%;
}
</style>