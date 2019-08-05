<template>
  <b-col>
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
      <b-button href="#" @click="addToCart" variant="primary">Add to cart</b-button>
    </b-card>
    <ImagePreview @closePreview="togglePreview()" :img="product.image" :show="preview"></ImagePreview>
  </b-col>
</template>

<style>
.product-img-container {
  overflow: hidden;
  height: 250px;
  cursor: pointer;
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
      console.log(this.product);
    }
  }
};
</script>