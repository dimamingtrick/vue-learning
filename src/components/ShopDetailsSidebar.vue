<template>
  <transition name="slide-fade-right">
    <div v-if="shopCartDetailIsOpen" class="cart-sidebar">
      <div @click="toggleCartSibebar()" class="background"></div>
      <div class="sidebar" :class="{
        'empty-sidebar': addedProducts.length === 0
      }">
        <span v-if="addedProducts.length === 0">No Added Products</span>
        <ProductInCart v-for="product in addedProducts" :key="product.id" :product="product"></ProductInCart>

        <div v-if="addedProducts.length > 0" class="total">
          Total price: {{totalPrice}}$
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductInCart from './ProductInCart.vue';

export default {
  name: 'ShopDetailsSidebar',
  components: { ProductInCart },
  computed: {
    ...mapGetters(['addedProducts', 'shopCartDetailIsOpen', 'totalPrice'])
  },
  methods: {
    ...mapActions(['TOGGLE_CART_DETAILS']),

    toggleCartSibebar() {
      this.$store.dispatch('TOGGLE_CART_DETAILS');
    }
  }
};
</script>

<style scoped>
.cart-sidebar {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
}

.sidebar {
  width: 40%;
  height: 100%;
  background: #fff;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 25px 15px 50px 15px;
  overflow-y: auto;
  align-items: center;
}

.empty-sidebar {
  justify-content: center;
}

.empty-sidebar span {
  color: #c3bdbd;
  font-size: 22px;
}

.slide-fade-right-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-right-enter-active .sidebar {
  transition: all 0.3s ease;
}

.slide-fade-right-leave-active {
  transition: all 0.5s;
  opacity: 1;
}
.slide-fade-right-leave-active .sidebar {
  transition: all 0.3s;
  transform: translateX(0);
}

.slide-fade-right-enter,
.slide-fade-right-leave-to {
  opacity: 0;
}

.slide-fade-right-enter .sidebar,
.slide-fade-right-leave-to .sidebar {
  transform: translateX(100%);
}
</style>
