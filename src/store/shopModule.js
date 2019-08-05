const state = {
  products: [],
  addedProducts: [],
  shopCartDetailIsOpen: false
};

const getters = {
  products: state => {
    return state.products;
  },
  addedProducts: state => {
    return state.addedProducts;
  },
  shopCartDetailIsOpen: state => {
    return state.shopCartDetailIsOpen;
  },
  addedProductsCount: state => {
    return state.addedProducts.reduce((sum, currentValue) => {
      return sum + currentValue.itemsCount;
    }, 0);
  }
};

const mutations = {
  GET_ALL_PRODUCTS: (state, products) => {
    state.products = products;
  },
  ADD_TO_CART: (state, product) => {
    const productInState = state.addedProducts.find(i => i.id === product.id);
    if (productInState) {
      productInState.itemsCount = productInState.itemsCount + 1;
    } else {
      state.addedProducts = [
        ...state.addedProducts,
        {
          ...product,
          itemsCount: 1
        }
      ];
    }
  },
  TOGGLE_CART_DETAILS: state => {
    state.shopCartDetailIsOpen = !state.shopCartDetailIsOpen;
  },
  INCREMENT_PRODUCT_COUNT: (state, productId) => {
    state.addedProducts = state.addedProducts.map(i => {
      if (i.id === productId) i.itemsCount = i.itemsCount + 1;
      return i;
    });
  },
  DECREMENT_PRODUCT_COUNT: (state, productId) => {
    state.addedProducts = state.addedProducts.map(i => {
      if (i.id === productId && i.itemsCount !== 0)
        i.itemsCount = i.itemsCount - 1;
      return i;
    });
  }
};

const actions = {
  GET_ALL_PRODUCTS: async context => {
    const products = await new Promise(res => {
      setTimeout(() => {
        res([
          {
            id: 1,
            name: "iPhone X",
            description: "iPhone X 126gb",
            image: "https://stylus.ua/thumbs/568x568/6c/ec/633463.jpeg",
            price: 800
          },
          {
            id: 2,
            name: "Airpods",
            description: "Wireless, bluetooth Airpods",
            image:
              "https://cactus.r.worldssl.net/18407-large_default/besprovodnye-naushniki-apple-airpods-2-with-charging-case-mv7n2.jpg",
            price: 170
          },
          {
            id: 3,
            name: "Bananas",
            description: "Fresh bananas from Africa",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SY355_.jpg",
            price: 5
          }
        ]);
      }, 1500);
    });
    context.commit("GET_ALL_PRODUCTS", products);
  },
  ADD_TO_CART: (context, product) => {
    context.commit("ADD_TO_CART", product);
  },
  TOGGLE_CART_DETAILS: context => {
    context.commit("TOGGLE_CART_DETAILS");
  },
  INCREMENT_PRODUCT_COUNT: (context, productId) => {
    context.commit("INCREMENT_PRODUCT_COUNT", productId);
  },
  DECREMENT_PRODUCT_COUNT: (context, productId) => {
    context.commit("DECREMENT_PRODUCT_COUNT", productId);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
