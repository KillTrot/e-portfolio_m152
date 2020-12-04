<template>
  <div>
    <div
      class="close"
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
  name: "Images",
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
  background: red;
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