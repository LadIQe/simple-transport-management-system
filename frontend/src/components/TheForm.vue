<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import TheFormWaypoint from './TheFormWaypoint.vue';
import FieldWrapper from './common/FieldWrapper.vue';
import type { FormOrderItem } from '@/types.ts'
import { useOrderStore } from '@/stores/order.ts'

defineOptions({
  name: 'TheForm'
})

const initialFormData = (): FormOrderItem => ({
  customerName: '',
  orderNumber: 0,
  date: new Date(),
  waypoints: []
})

const formData = reactive<FormOrderItem>(initialFormData())

const orderStore = useOrderStore()

function submit() {
  orderStore.postOrder(formData)
}

watchEffect(() => {
  if (orderStore.postingOrder.isSuccess) {
    Object.assign(formData, initialFormData())
  }
})
</script>

<template>
  <form @submit.prevent="submit">
    <div class="grid">
      <FieldWrapper label="Customer Name">
        <input id="customerName" type="text" v-model="formData.customerName" required />
      </FieldWrapper>

      <FieldWrapper label="Order Number">
        <input id="orderNumber" type="number" v-model="formData.orderNumber" required />
      </FieldWrapper>

      <FieldWrapper label="Order Date">
        <input id="date" type="datetime-local" v-model="formData.date" required />
      </FieldWrapper>

      <div class="waypoints">
        <TheFormWaypoint v-model="formData.waypoints" />
      </div>
    </div>

    <button type="submit" :disabled="orderStore.postingOrder.isLoading">
      {{ orderStore.postingOrder.isLoading ? 'Posting...' : 'Post Order' }}
    </button>
  </form>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  row-gap: 1rem;
}

.waypoints {
  grid-column: span 2;
}

button[type="submit"] {
  margin-top: 2rem;
}
</style>
