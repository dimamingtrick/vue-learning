const state = {
  todos: [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Third" }
  ]
};

const getters = {
  todos: state => {
    return state.todos;
  }
};

const mutations = {
  ADD_TODO: (state, newTodo) => {
    const lastElem = state.todos[state.todos.length - 1];
    state.todos = [
      ...state.todos,
      { ...newTodo, id: lastElem ? lastElem.id + 1 : 0 }
    ];
  },
  DELETE_TODO: (state, todoId) => {
    state.todos = state.todos.filter(i => i.id !== todoId);
  }
};

const actions = {
  ADD_TODO: async (context, todo) => {
    const newTodo = await new Promise(res => {
      setTimeout(() => {
        res(todo);
      }, 1500);
    });
    context.commit("ADD_TODO", newTodo);
  },
  DELETE_TODO: async (context, id) => {
    await new Promise(res => {
      setTimeout(() => {
        res(id);
      }, 1500);
    });
    context.commit("DELETE_TODO", id);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
