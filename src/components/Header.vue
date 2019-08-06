<template>
  <div class="header" :class="getHeaderBackground($route.path)">
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

<script>
import ShopCard from './ShopCard.vue';

export default {
  name: "Header",
  components: { ShopCard },
  methods: {
    getHeaderBackground (path) {
      if (path === '/shop') {
        return 'shop-header';
      } else if (path === '/') {
        return 'home-header';
      } else if (path === '/todo-form') {
        return 'todo-form-header';
      } else if (path === '/todo-list') {
        return 'todo-list-header';
      } else {
        return 'default-header';
      }
    }
  }
};
</script>

<style>
.header {
  position: fixed;
  z-index: 1000;
  width: 100%;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .25s;
}

.header a {
  color: #2c3e50;
}
.header a:hover {
  text-decoration: none;
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

.shop-header {
  background: #001f3f;
}
.shop-header a {
  color: #fff!important;
}

.home-header {
  background: #7FDBFF;
}
.home-header a {
  color: #fff!important;
}

.todo-form-header {
  background: #85144b;
}
.todo-form-header a {
  color: #fff!important;
}

.todo-list-header {
  background: #01FF70;
}
.todo-list-header a {
  color: #fff!important;
}

.default-header {
  background: #fff;
  color: #2c3e50;
}
.default-header a {
  color: #2c3e50!important;
}


</style>
