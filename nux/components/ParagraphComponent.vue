<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
