import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../pages/HomePage.vue";
import TodoFormPage from "../pages/TodoFormPage.vue";
import TodoListPage from "../pages/TodoListPage.vue";
import ShopPage from "../pages/ShopPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "Home Page"
  },
  {
    path: "/shop",
    component: ShopPage,
    name: "Shop Page"
  },
  {
    path: "/todo-form",
    component: TodoFormPage,
    name: "Todo Form Page"
  },
  {
    path: "/todo-list",
    component: TodoListPage,
    name: "Todo List Page"
  }
];

export default new VueRouter({
  routes
});
