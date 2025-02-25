<script setup lang="ts">
import TheOrderList from '@/components/TheOrderList.vue'
</script>

<template>
  <div class="home-wrapper">
    <TheOrderList />
  </div>
</template>

<style scoped>
.home-wrapper {
  display: flex;
  gap: 2rem;
  flex-direction: column;
}
</style>
