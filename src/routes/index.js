import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../pages/HomePage.vue";
import TodoFormPage from "../pages/TodoFormPage.vue";
import TodoListPage from "../pages/TodoListPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
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
