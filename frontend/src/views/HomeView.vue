<script setup lang="ts">
import TheForm from '@/components/TheForm.vue';
import TheOrderList from '@/components/TheOrderList.vue'
</script>

<template>
  <main class="home-wrapper">
    <TheForm />
    <TheOrderList />
  </main>
</template>

<style scoped>
.home-wrapper {
  display: flex;
  gap: 2rem;
  flex-direction: column;
}
</style>
