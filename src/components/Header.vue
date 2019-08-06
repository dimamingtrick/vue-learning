<template>
  <div class="header">
    <router-link to="/">
      <img id="vue-logo" alt="Vue logo" src="../assets/logo.png" />
    </router-link>
    <div class="page-title">
      <router-link :to="$route.path">{{$route.name}}</router-link>
    </div>
    <div class="header-links">
      <ul class="router-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/shop">Shop</router-link>
        </li>
        <li>
          <router-link to="/todo-form">Todo Form</router-link>
        </li>
        <li>
          <router-link to="/todo-list">Todo List</router-link>
        </li>
        <li>
          <ShopCard></ShopCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.header {
  width: 100%;
  padding: 5px 15px;
  border-bottom: 1px solid rgba(237, 227, 255, 0.64);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#vue-logo {
  width: 50px;
}

.buttons-row {
  display: flex;
  justify-content: space-around;
}

.router-links {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.router-links li {
  list-style-type: none;
  margin: 0 15px;
}

.router-links li:last-child {
  margin-right: 0;
}

.page-title {
  margin-right: auto;
  margin-left: 25px;
  font-size: 25px;
  font-weight: bold;
}
.page-title a {
  color: #2c3e50;
}
.page-title a:hover {
  text-decoration: none;
}
</style>

<script>
import ShopCard from "./ShopCard.vue";

export default {
  name: "Header",
  components: { ShopCard },
  mounted() {
    console.log(this.$route);
  }
};
</script>