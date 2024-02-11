<template>
  <input class="input" @input="handleInput" :value="value" />
</template>

<script>
export default {
  name: "AppInput",

  props: ["value"],
  
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  padding: 8px 14px;
  border: 1px solid #000;
}
</style>
