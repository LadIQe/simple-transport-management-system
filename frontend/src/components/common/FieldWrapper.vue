<script setup lang="ts">
import { h } from 'vue'

type ElementEvent = EventTarget & {
  value: string | number | Date | undefined
}

defineOptions({
  name: 'FieldWrapper'
})

const props = defineProps<{
  id: string
  label: string
  required?: boolean
}>()
const slot = defineSlots<{
  default: () => (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[]
}>()
const model = defineModel<string | number | Date>()

const createElement = () => {
  const element = slot.default()[0]

  return h(
    element,
    {
      id: props.id,
      required: props.required,
      value: model.value,
      onChange: ({ target }: { target: ElementEvent }) => {
        model.value = target.value
      }
    }
  )
}
</script>

<template>
  <div class="field-wrapper">
    <label :for="id">
      {{ label }}
      <span v-if="required">*</span>
    </label>

    <component :is="createElement()" />
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
