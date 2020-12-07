<template>
  <div>
    <div class="close" @click="close" @mouseenter="showCloseIcon = true">
      <x-icon size="2.5x"></x-icon>
    </div>
    <div class="images">
      <div></div>
      
      <div></div>
      
      <div></div>
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
  background: linear-gradient(
    to top,
    rgba(150, 54, 148, 0.5),
    rgba(42, 42, 42, 1)
  );
  .images {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
    vertical-align: middle;
    flex-wrap: wrap;
    div {
      position: relative;
      margin: 15px auto;
      width: 600px;
      height: 337.5px;
      background: red;
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
</style>