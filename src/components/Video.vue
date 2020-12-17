<template>
  <div>
    <video
      controls
      @mouseenter="showCloseIcon = true"
      @mouseleave="showCloseIcon = false"
    >
      <source
        src="https://res.cloudinary.com/killtrot/video/upload/v1608198641/output_hu890g_h264_lira42.mp4"
        type="video/mp4"
      />
    </video>
    <div
      class="close"
      v-show="showCloseIcon"
      @click="close"
      @mouseenter="showCloseIcon = true"
    >
      <x-icon size="2.5x"></x-icon>
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
export default {
  name: "Video",
  data: () => ({
    showCloseIcon: true,
  }),
  components: {
    XIcon,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
</style>