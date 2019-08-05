import Vue from "vue";
import Vuex from "vuex";

import todoModule from "./todoModule";
import shopModule from "./shopModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo: todoModule,
    shop: shopModule
  }
});
