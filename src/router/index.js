import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/Video",
        name: "Video"
      }
    ]
  },
  {
    path: "/Images",
    name: "Images",
    component: Home
  },
  {
    path: "/Information",
    name: "Information",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: () => import("@/views/Gallery.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
