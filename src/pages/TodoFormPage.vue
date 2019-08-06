<template>
  <div class="page" id="todoFormPage">
    <b-container>
      <b-row>
        <b-col>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="Name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                required
                :disabled="loading"
                placeholder="Enter todo name"
              ></b-form-input>
            </b-form-group>

            <b-button :disabled="loading" type="submit" variant="primary">Submit</b-button>
            <b-button :disabled="loading" type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="todo" v-for="todo in todos" :key="todo.id">
            <div class="todo-name">
              <span class="todo-number">{{todo.id}}.</span>
              {{todo.name}}
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
  name: "TodoFormPage",
  computed: {
    ...mapGetters(["todos"])
  },
  data: () => ({
    form: {
      name: ""
    },
    loading: false
  }),
  methods: {
    ...mapActions(["ADD_TODO"]),

    onSubmit(e) {
      e.preventDefault();
      if (this.loading) return;

      this.loading = true;
      this.$store.dispatch("ADD_TODO", this.form).then(() => {
        this.onReset();
        this.loading = false;
      });
    },
    onReset(e) {
      if (e) e.preventDefault();
      this.form.name = "";
    }
  }
};
</script>

<style scoped>
#todoFormPage {
  /* background: rgba(22, 32, 245, 0.1); */
}

button {
  margin: 0 10px;
}
</style>
