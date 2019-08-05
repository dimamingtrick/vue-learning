<template>
  <div class="text-center">
  <b-button @click="toggleShopCard()" variant="transparent">
    <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png" alt="cart" class="shop-cart">
    <b-badge variant="dark">{{addedProductsCount}} <span class="sr-only">unread messages</span></b-badge>
  </b-button>
</div>
</template>

<style scoped>
  .shop-cart {
    width: 30px;
    margin-right: 5px;
  }
</style>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShopCard',
  computed: {
    ...mapGetters(['addedProductsCount'])
  },
  methods: {
    toggleShopCard () {
      this.$store.dispatch("TOGGLE_CART_DETAILS");
    }
  }
}
</script>