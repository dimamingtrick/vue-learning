<template>
  <transition name="slide-fade-right">
    <div v-if="shopCartDetailIsOpen" class="cart-sidebar">
      <div @click="toggleCartSibebar()" class="background"></div>
      <div class="sidebar" :class="{
        'empty-sidebar': addedProducts.length === 0
      }">
        <div class="sidebar-products">
          <span v-if="addedProducts.length === 0">No Added Products</span>
          <ProductInCart v-for="product in addedProducts" :key="product.id" :product="product"></ProductInCart>
        </div>
        <div v-if="addedProducts.length > 0" class="total">
          Total price:
          <span>{{totalPrice}}$</span>
        </div>
        <b-button-group v-if="addedProducts.length > 0" class="shop-buttons">
          <b-button variant="info" @click="toggleSubmitForm()">Submit</b-button>
          <b-button @click="clearCart()">Clear cart</b-button>
        </b-button-group>
      </div>

      <b-modal
        hide-footer
        id="modal-prevent-closing"
        ref="modal"
        title="Enter your name to submit"
        v-model="showSubmitModal"
        @hide="closeModal"
      >
        <SubmitProductsForm
          @submitForm="submit"
          @closeForm="toggleSubmitForm"
          :isSubmitting="isSubmitting"
        ></SubmitProductsForm>
      </b-modal>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductInCart from "./ProductInCart.vue";
import SubmitProductsForm from "./SubmitProductsForm.vue";

export default {
  name: "ShopDetailsSidebar",
  components: { ProductInCart, SubmitProductsForm },
  computed: {
    ...mapGetters(["addedProducts", "shopCartDetailIsOpen", "totalPrice"])
  },
  data() {
    return {
      showSubmitModal: false,
      isSubmitting: false
    };
  },
  watch: {
    shopCartDetailIsOpen () {
      this.shopCartDetailIsOpen
        ? (document.querySelector(".page").style.overflowY = "hidden")
        : (document.querySelector(".page").style.overflowY = "auto");
    }
  },
  methods: {
    ...mapActions(["TOGGLE_CART_DETAILS"]),

    toggleCartSibebar() {
      this.$store.dispatch("TOGGLE_CART_DETAILS");
    },
    toggleSubmitForm() {
      this.showSubmitModal = !this.showSubmitModal;
    },
    closeModal() {
      this.isSubmitting = false;
    },
    submit(formValue) {
      this.isSubmitting = true;
      this.$store
        .dispatch("SUBMIT_CART_FORM", {
          name: formValue.name,
          price: this.totalPrice
        })
        .then(res => {
          this.isSubmitting = false;
          this.toggleSubmitForm();
          this.toggleCartSibebar();
          this.$bvToast.toast(
            `Congratulations, ${res.name}, you have successfully submitted the products for ${res.price}$!`,
            {
              title: "Congratulations",
              variant: "success",
              solid: true
            }
          );
        });
    },
    clearCart() {
      this.$bvModal
        .msgBoxConfirm("Do you realy want to clear all product in cart ?", {
          title: "Clear all cart ?",
          centered: true,
          okTitle: "Yes",
          cancelTitle: "No"
        })
        .then(res => {
          if (res) this.$store.dispatch("CLEAR_CART");
        });
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
  z-index: 1002;
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
  padding: 0 0 38px 0;
}

.sidebar-products {
  overflow-y: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 25px 15px 0 15px;
}

.empty-sidebar {
  justify-content: center;
}

.empty-sidebar span {
  color: #c3bdbd;
  font-size: 22px;
}

.slide-fade-right-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-right-enter-active .sidebar {
  transition: all 0.3s ease;
}

.slide-fade-right-leave-active {
  transition: all 0.3s;
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

.shop-buttons {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.shop-buttons button {
  border-radius: 0;
}
.total {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  padding: 10px;
  margin-top: auto;
}
.total span {
  font-weight: bold;
}
</style>
