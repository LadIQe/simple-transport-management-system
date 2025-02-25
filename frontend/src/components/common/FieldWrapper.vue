<script setup lang="ts">
import { useSlots } from 'vue'

defineOptions({
  name: 'FieldWrapper'
})

defineProps({
  label: String
})

const slot = useSlots()
const element = slot.default?.()[0] || null
const id = element?.props?.id || ''
const required = element?.props?.required === '' || false
</script>

<template>
  <div class="field-wrapper">
    <label :for="id">
      {{ label }}
      <span v-if="required">*</span>
    </label>

    <slot />
  </div>
</template>

<style scoped>
.field-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 100%;
}

.field-wrapper > * {
  width: 100%;
}
</style>
