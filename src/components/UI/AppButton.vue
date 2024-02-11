<template>
  <button class="button" @click="handleClick">
    <slot>Сохранить</slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: #fff;
  background-color: var(--color-accent);
  transition: 0.2s opacity ease;
}

.button:hover {
  opacity: 0.9;
  transition: 0.2s opacity ease;
}
</style>
