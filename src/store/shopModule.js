const state = {
  products: []
};

const getters = {
  products: state => {
    return state.products;
  }
};

const mutations = {
  GET_ALL_PRODUCTS: (state, products) => {
    state.products = products;
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
