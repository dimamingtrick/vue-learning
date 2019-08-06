<template>
  <b-col md="6" cols="12" lg="3">
    <b-card
      :title="product.name"
      :img-alt="product.name"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 product"
    >
      <div class="product-img-container">
        <div
          class="product-img"
          :style="{
          background: `url('${product.image}')`
        }"
          @click="togglePreview()"
        ></div>
      </div>
      <b-card-text>{{product.description}}</b-card-text>
      <b-button href="#" @click="addToCart" variant="primary">
        Add to cart
        <span class="price">{{product.price}}$</span>
      </b-button>
    </b-card>
    <ImagePreview @closePreview="togglePreview()" :img="product.image" :show="preview"></ImagePreview>
  </b-col>
</template>

<script>
import ImagePreview from "./ImagePreview.vue";
import { setInterval, setTimeout } from "timers";

export default {
  name: "Product",
  components: { ImagePreview },
  data() {
    return {
      preview: false
    };
  },
  props: ["product"],
  methods: {
    togglePreview() {
      this.preview = !this.preview;
    },
    addToCart(e) {
      console.log(e);
      this.$store.dispatch("ADD_TO_CART", this.product);

      const cart = document.getElementById("productCart");
      const cartCoords = cart.getBoundingClientRect();

      const item = document.createElement("div");

      item.className = "addedItem";
      item.style.top = e.pageY + "px";
      item.style.left = e.pageX + "px";

      const app = document.getElementById("app");
      app.appendChild(item);
      
      let x = cartCoords.top;
      let y = cartCoords.left;
      let i = 1;
      let j = 1;
      console.log(item.offsetLeft + 1 + "px")
      function animateItem() {
        if (item.style.top >= y + 'px' || item.style.left <= x + 'px') {

          setTimeout(() => {
            if (item.style.top >= y + 'px') item.style.top = item.offsetTop - 3 + "px";
            if (item.style.left <= x + 'px') item.style.left = item.offsetLeft + 3 + "px";
            animateItem();
          }, 0);
        }
      }

      animateItem();
    }
  }
};
</script>

<style>
.addedItem {
  width: 50px;
  height: 50px;
  background: red;
  position: absolute;
  z-index: 10000;
}

.product {
  width: 100%;
}

.product .card-body {
  padding: 5px !important;
}

.product .card-text {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img-container {
  overflow: hidden;
  height: 250px;
  cursor: pointer;
  margin-bottom: 15px;
}

.product-img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background-size: contain !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.product-img:hover {
  transform: scale(1.025);
}

.price {
  font-weight: bold;
  margin-left: 5px;
}
</style>
<style scoped>
.product {
  padding-bottom: 5px !important;
}
.product .card-text {
  margin-bottom: 5px;
}
</style>
