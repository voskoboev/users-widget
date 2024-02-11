<template>
  <div class="card">
    <slot></slot>  
  </div>
</template>

<script>
export default {
  name: 'AppCard'
}
</script>

<style scoped>
  .card {
    padding: 20px;
    border: 1px solid #d4cece;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
</style>