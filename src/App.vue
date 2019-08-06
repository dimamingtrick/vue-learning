<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <ShopDetailsSidebar></ShopDetailsSidebar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./components/Header.vue";
import ShopDetailsSidebar from "./components/ShopDetailsSidebar.vue";

export default {
  name: "app",
  components: { Header, ShopDetailsSidebar },
  computed: {
    ...mapGetters(["shopCartDetailIsOpen"])
  }
};
</script>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

#app > .page {
  flex: 1;
  padding: 25px 15px;
}
</style>
