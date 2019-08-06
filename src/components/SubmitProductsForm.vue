<template>
  <form ref="form" @submit="submitForm">
    <b-form-group label="Name" label-for="name-input" invalid-feedback="Name is required">
      <b-form-input id="name-input" v-model="form.name" required></b-form-input>
    </b-form-group>
    <div class="buttons-row">
      <b-button :disabled="isSubmitting" type="submit" variant="primary">
        <span v-if="!isSubmitting">Submit</span>
        <b-spinner v-if="isSubmitting" label="Spinning"></b-spinner>
      </b-button>
      <b-button :disabled="isSubmitting" @click="closeForm" type="reset" variant="danger">Close</b-button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SubmitProductsForm",
  props: ["show", "isSubmitting"],
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.$emit("submitForm", this.form);
    },
    closeForm() {
      this.$emit("closeForm");
    }
  }
};
</script>
<style scoped>
.buttons-row {
  display: flex;
  justify-content: flex-end;
}
.buttons-row .btn-danger {
  margin-left: 15px;
}
.buttons-row .btn-primary {
  min-width: 75px;
}
.buttons-row .btn-primary span.spinner-border {
  width: 1rem;
  height: 1rem;
}
</style>