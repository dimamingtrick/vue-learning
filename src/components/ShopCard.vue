<template>
  <div class="text-center">
    <b-button
      id="productCart"
      class="shop-button"
      :key="addedProductsCount"
      @click="toggleShopCard()"
      variant="transparent"
    >
      <div class="shop-btn-content">
        <img
          src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png"
          alt="cart"
          class="shop-cart"
        />
        <b-badge variant="dark">
          {{addedProductsCount}}
          <span class="sr-only">unread messages</span>
        </b-badge>
      </div>
    </b-button>
  </div>
</template>

<style scoped>
.shop-cart {
  width: 30px;
  margin-right: 5px;
}

.shop-btn-content {
  padding: 2px;
  border-radius: 10px;
  background: #fff;
  animation: pulse 1s forwards;
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(22, 205, 230, 0.4);
    box-shadow: 0 0 0 0 rgba(22, 205, 230, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 15px rgba(22, 205, 230, 0);
    box-shadow: 0 0 0 15px rgba(22, 205, 230, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(22, 205, 230, 0);
    box-shadow: 0 0 0 0 rgba(22, 205, 230, 0);
  }
}
</style>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ShopCard",
  computed: {
    ...mapGetters(["addedProductsCount"])
  },
  methods: {
    toggleShopCard() {
      this.$store.dispatch("TOGGLE_CART_DETAILS");
    }
  }
};
</script>