<template>
  <div class="header">
    <img id="vue-logo" alt="Vue logo" src="../assets/logo.png">
    <div class="header-title">
      It is a best header in the world!
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
      </ul>
    </div>
  </div>
</template>

<style>
  .header {
    width: 100%;
    padding: 15px 0 5px 0;
    border-bottom: 1px solid rgba(237, 227, 255, 0.64);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #vue-logo {
    width: 50px;
    margin-bottom: 15px;
  }

  .buttons-row {
    display: flex;
    justify-content: space-around;
  }

  .router-links {
    margin: 15px 0;
    padding: 0;
    display: flex;
  }

  .router-links li {
    list-style-type: none;
    margin: 0 15px;
  }
</style>

<script>
export default {
  name: "Header",
}
</script>