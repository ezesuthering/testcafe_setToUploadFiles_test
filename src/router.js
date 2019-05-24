import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import WithAction from "./views/WithAction.vue";
import WithoutAction from "./views/WithoutAction.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/withAction",
      name: "withAction",
      component: WithAction
    },
    {
      path: "/withoutAction",
      name: "withoutAction",
      component: WithoutAction
    }
  ]
});
