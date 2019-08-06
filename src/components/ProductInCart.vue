<template>
  <b-card :title="product.name" :img-alt="product.name" img-top tag="article" class="mb-4 product">
    <div class="product-img-container">
      <div class="product-img" :style="{
          background: `url('${product.image}')`
        }"></div>
    </div>
    <b-card-text>{{product.description}}</b-card-text>

    <div class="items-count-row">
      <b-button variant="primary" @click="decrementItems()">-</b-button>
      <b-badge pill variant="info">{{product.itemsCount}}</b-badge>
      <b-badge pill variant="success">{{product.itemsCount * product.price}}$</b-badge>
      <b-button variant="primary" @click="incrementItems()">+</b-button>
    </div>
    <b-button
      variant="danger"
      class="delete-product"
      @click="deleteProductFromCart()"
    >Delete Product</b-button>
  </b-card>
</template>

<style>
.product {
  width: 90%;
  padding-bottom: 45px;
}

.product-img-container {
  overflow: hidden;
  height: 175px;
  cursor: pointer;
  border: 1px solid #37474f4f;
  border-radius: 3px;
}

.product-img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background-size: contain!important;
  background-position: center !important;
  background-repeat: no-repeat!important;
}

.items-count-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.items-count-row span {
  font-size: 85%;
  padding: 0.6rem;
}

.items-count-row button {
  padding: 10px;
  line-height: 0.5;
}

.delete-product {
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 !important;
}
</style>

<script>
export default {
  name: "ProductInCart",
  data() {
    return {
      preview: false
    };
  },
  props: ["product"],
  methods: {
    incrementItems() {
      this.$store.dispatch("INCREMENT_PRODUCT_COUNT", this.product.id);
    },
    decrementItems() {
      this.$store.dispatch("DECREMENT_PRODUCT_COUNT", this.product.id);
    },
    deleteProductFromCart() {
      this.$store.dispatch("DELETE_PRODUCT_FROM_CART", this.product.id);
    }
  }
};
</script>

