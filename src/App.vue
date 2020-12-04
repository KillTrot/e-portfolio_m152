<template>
  <div
    id="app"
    ref="app"
    :style="{
      overflow: canScroll ? 'auto' : 'hidden',
      height: canScroll ? 'auto' : '100vh',
    }"
  >
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    canScroll: true,
  }),
  components: {},
  watch: {
    $route: {
      handler(val) {
        if (val.path != "/") {
          window.scrollTo(0,0);
          setTimeout(() => {
            this.canScroll = false;
          }, 1000);
        } else {
          this.canScroll = true;
        }
      },
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: Magneto;
  src: url("./assets/fonts/MAGNETOB.TTF");
}
* {
  box-sizing: border-box;
}
html,
body {
  scroll-behavior: smooth;
  margin: 0;
  background: darken(#434343, 10%);
}
.app {
  scroll-behavior: smooth;
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
