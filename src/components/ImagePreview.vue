<template>
  <transition name="slide-fade">
    <div v-if="show" class="preview">
      <div class="preview-bg" @click="closePreview()"></div>
      <b-button variant="danger" @click="closePreview()">x</b-button>
      <img :src="img" alt="img" class="preview-img" />
    </div>
  </transition>
</template>

<style scoped>
.preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-fade-enter-active {
  transition: all .25s ease;
}
.slide-fade-leave-active {
  transition: all .25s;
  opacity: 1;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

.preview-bg {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.preview-img {
  z-index: 1001;
  width: 25%;
}

button {
  font-weight: bold;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 12px 8px;
  line-height: 0;
}
</style>
<script>
export default {
  name: "ImagePreview",
  props: ["show", "img"],
  methods: {
    closePreview() {
      this.$emit("closePreview");
    }
  }
};
</script>