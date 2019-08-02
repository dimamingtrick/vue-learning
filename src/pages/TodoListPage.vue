<template>
  <div class="page" id="todoListPage">
    <h1>TODO LIST</h1>
    <b-container>
      <b-row>
        <b-col>
          <div class="todo" v-for="todo in todos" :key="todo.id">
            <div class="todo-name">
              <span class="todo-number">{{todo.id}}.</span>
              {{todo.name}}
            </div>
            <div class="todo-actions">
              <b-button
                v-if="itemDeleting !== todo.id"
                variant="outline-danger"
                @click="() => deleteTodo(todo.id)"
              >x</b-button>
              <b-spinner
                v-if="isDeleting && itemDeleting === todo.id"
                class="deleteSpinner"
                label="Spinning"
              ></b-spinner>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoListPage",
  computed: {
    ...mapGetters(["todos"])
  },
  data: () => ({
    isDeleting: false,
    itemDeleting: null
  }),
  methods: {
    ...mapActions(["DELETE_TODO"]),

    deleteTodo(id) {
      this.$bvModal
        .msgBoxConfirm("You will not be able to get it back", {
          title: "Delete this todo ?",
          centered: true,
          okTitle: "Yes",
          cancelTitle: "No"
        })
        .then(res => {
          if (res) {
            this.isDeleting = true;
            this.itemDeleting = id;
            this.$store.dispatch("DELETE_TODO", id).then(() => {
              this.isDeleting = false;
              this.itemDeleting = null;
            });
          }
        });
    }
  }
};
</script>

<style scoped>
#todoListPage {
  background: rgba(98, 221, 27, 0.75);
}

.deleteSpinner {
  width: 10px;
  height: 10px;
  color: #dc3545;
  border-width: 0.05em;
}
</style>
<style>
  
.todo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}

.todo span.todo-number {
  font-weight: bold;
  margin-right: 5px;
}

.todo .todo-actions {
  margin-left: 10px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dc3545;
  border-radius: 0.25em;
}

.todo .todo-actions button {
  border: none;
  padding: 5px;
  width: 25px;
  height: 25px;
  line-height: 0;
  font-size: 15px;
}
</style>