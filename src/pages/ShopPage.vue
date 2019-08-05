<template>
  <div class="page" id="shopPage">
    <h1>SHOP PAGE</h1>
    <h2>{{isLoading}}</h2>
    <b-container>
      <b-row>
        <Product v-for="product in products" :key="product.id" :product="product"></Product>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#shopPage {
  background: rgba(236, 224, 184, 0.2);
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "../components/Product.vue";

export default {
  name: "ShopPage",
  components: { Product },
  computed: {
    ...mapGetters(["products"])
  },
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    ...mapActions(["ADD_TODO"])
  },
  mounted() {
    this.$store.dispatch("GET_ALL_PRODUCTS").then(() => {
      this.isLoading = false;
      console.log(this.shopList);
    });
  }
};
</script>

