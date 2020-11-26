import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTailwind from 'vue-tailwind'

Vue.config.productionTip = false;

new Vue({
    VueTailwind,
    router,
    store,
    render: h => h(App)
}).$mount("#app");