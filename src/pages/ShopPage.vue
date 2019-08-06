<template>
  <div class="page" id="shopPage">
    <h1>SHOP PAGE</h1>
    <b-container fluid>
      <transition name="fade">
        <MainPreloader class="absoluteCenterLoader" v-if="isLoading"></MainPreloader>
      </transition>
      <b-row v-if="!isLoading" class="fadeInRow">
        <Product v-for="product in products" :key="product.id" :product="product"></Product>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#shopPage {
  background: rgba(236, 224, 184, 0.2);
}

.absoluteCenterLoader {
  position: absolute;
  margin: 0 auto;
  left: calc(50% - 62.5px);
  top: calc(50% - 75px);
}

.fadeInRow {
  animation: fadeIn .25s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active {
  transition: all .25s ease;
}
.fade-leave-active {
  transition: all .25s;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "../components/Product.vue";
import MainPreloader from "../components/MainPreloader.vue";

export default {
  name: "ShopPage",
  components: { Product, MainPreloader },
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
    });
  }
};
</script>

