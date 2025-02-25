<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'OrderDetailLabeledValue'
})

const props = defineProps<{
  label: string,
  value: string | number | Date
}>()

const computedValue = computed(() => {
  if (props.value instanceof Date) {
    return props.value.toLocaleString()
  }

  return props.value
})
</script>

<template>
  <div class="labeled-value-wrapper">
    <span class="font-bold">{{ label }}</span>
    <span>{{ computedValue }}</span>
  </div>
</template>

<style scoped>
.labeled-value-wrapper {
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
}
</style>
