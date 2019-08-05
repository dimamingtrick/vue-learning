import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../pages/HomePage.vue";
import TodoFormPage from "../pages/TodoFormPage.vue";
import TodoListPage from "../pages/TodoListPage.vue";
import ShopPage from "../pages/ShopPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/shop",
    component: ShopPage
  },
  {
    path: "/todo-form",
    component: TodoFormPage
  },
  {
    path: "/todo-list",
    component: TodoListPage
  }
];

export default new VueRouter({
  routes
});
