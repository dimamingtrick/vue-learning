<template>
  <div>
    <div class="eye">
      <div class="eye-apple">
        <div class="eye-color"></div>
      </div>
    </div>
    <form ref="form" @submit="submitForm">
    <b-form-group label="Name" label-for="name-input" invalid-feedback="Name is required">
      <input style="font-size: 16px" @input="handleInput" id="name-input" v-model="form.name" required class="form-control"/>
    </b-form-group>
    <div class="buttons-row">
      <b-button :disabled="isSubmitting" type="submit" variant="primary">
        <span v-if="!isSubmitting">Submit</span>
        <b-spinner v-if="isSubmitting" label="Spinning"></b-spinner>
      </b-button>
      <b-button :disabled="isSubmitting" @click="closeForm" type="reset" variant="danger">Close</b-button>
    </div>
  </form>
  </div>
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
    },
    handleInput(e) {
      const { x, width } = e.target.getBoundingClientRect();
      // console.log('@@@@@', e.target.value.length * e.target.style.fontSize.replace('px', ''))
      const span = document.createElement("span");
      span.innerHTML = e.target.value;
      span.id = 'spanTest';
      span.style.position = 'absolute';
      span.style.zIndex = -1000;
      span.style.opacity = 0;

      document.body.appendChild(span);

      const inputPos = span.offsetWidth + x; // 0%
      console.log('#####', inputPos);

      const eye = document.querySelector('.eye-color');
      const eyeCenter = eye.getBoundingClientRect().x + 15;

      const input = document.getElementById('name-input');
      const inputWidth = input.offsetWidth; // 100%

      const newPosition = inputPos / 2 / eyeCenter * 100 + '%';

      eye.style.left = newPosition;

      console.log('.................', inputPos / 2 / eyeCenter * 100 + '%' );

      // if (inputPos >= eyeCenter) {
      //   alert('a')
      // }
    }
  }
};
</script>
<style scoped>
.eye {
  width: 100px;
  height: 65px;
  background: antiquewhite;
  border-radius: 50%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.eye-apple {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.eye-color {
  width: 30px;
  height: 30px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  transition: .25s;
}


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