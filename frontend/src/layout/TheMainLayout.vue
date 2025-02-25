<script setup lang="ts">

import { RouteNames } from '@/router'
</script>

<template>
  <main>
    <header class="header">
      <RouterLink :to="{ name: RouteNames.LIST }">List</RouterLink>
      <RouterLink :to="{ name: RouteNames.CREATE }">Create Order</RouterLink>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
.header {
  display: flex;
  gap: 1rem;
  margin-bottom: 5rem;
  justify-content: center;
}

.header a {
  font-size: 1.5rem;
}
</style>
