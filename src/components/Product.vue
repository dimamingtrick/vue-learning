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
      <b-button href="#" @click="addToCart" variant="primary">Add to cart <span class="price">{{product.price}}$</span></b-button>
    </b-card>
    <ImagePreview @closePreview="togglePreview()" :img="product.image" :show="preview"></ImagePreview>
  </b-col>
</template>

<style>
.product {
  width: 100%;
}

.product .card-body {
  padding: 5px!important;
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
  background-size: cover !important;
  background-position: center !important;
}

.product-img:hover {
  transform: scale(1.15);
}

.price {
  font-weight: bold;
  margin-left: 5px;
}
</style>

<script>
import ImagePreview from "./ImagePreview.vue";

export default {
  name: "Product",
  components: { ImagePreview },
  data () {
    return {
      preview: false
    }
  },
  props: ["product"],
  methods: {
    togglePreview () {
      this.preview = !this.preview;
    },
    addToCart () {
      this.$store.dispatch("ADD_TO_CART", this.product);
    }
  }
};
</script>