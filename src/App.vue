<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Magneto;
  src: url("./assets/fonts/MAGNETOB.TTF");
}
*{
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  background: darken(#434343, 10%);
}
.fade-enter-active {
  transition: opacity 0.5s 0.5s;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
