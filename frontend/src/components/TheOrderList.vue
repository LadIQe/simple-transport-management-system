<script setup lang="ts">
import { useOrderStore } from '@/stores/order.ts'
import { onMounted, reactive, watch } from 'vue'
import debounce from 'lodash.debounce'
import type { Filters } from '@/types.ts'
import { RouteNames } from '@/router'

defineOptions({
  name: 'TheOrderList'
})

const filters = reactive<Filters>({})

const orderStore = useOrderStore()

const debouncedGetList = debounce((filters: Filters) => orderStore.getList(filters), 500)

onMounted(() => {
  orderStore.getList(filters)
})

watch(filters, () => {
  debouncedGetList(filters)
})
</script>

<template>
  <div class="orders-wrapper">
    <div class="header">
      <h3 class="title">Orders</h3>

      <div class="filters">
        <input type="text" placeholder="Customer" v-model.trim="filters.customerName" />
        <input type="datetime-local" v-model="filters.date" />
      </div>
    </div>

    <div class="list">
      <RouterLink
        v-for="order in orderStore.orderList"
        :key="order.id"
        class="order"
        :to="{ name: RouteNames.DETAIL, params: { id: order.id } }"
      >
        <div>
          <span class="font-bold">Customer name: </span>
          <span>{{ order.customerName }}</span>
        </div>

        <div>
          <span class="font-bold">Order number: </span>
          <span>{{ order.orderNumber }}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.orders-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.orders-wrapper .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.orders-wrapper .filters {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.orders-wrapper .title {
  font-size: 1.5rem;
  font-weight: bold;
}

.orders-wrapper .list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.orders-wrapper .list .order {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  border: 1px solid gray;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
