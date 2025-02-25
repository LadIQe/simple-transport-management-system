<script setup lang="ts">
import { useOrderStore } from '@/stores/order.ts'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import OrderDetailLabeledValue from '@/components/OrderDetailLabeledValue.vue'

defineOptions({
  name: 'OrderDetailView'
})

const route = useRoute()
const orderStore = useOrderStore()

const wrongId = ref(false)

watchEffect(() => {
  const id = route.params.id
  const parsedId = Number(id)

  if (!isNaN(parsedId)) {
    orderStore.getDetail(Number(id))
  } else {
    wrongId.value = true
  }
})
</script>

<template>
  <main class="order-detail-wrapper">
    <h2 class="title">Order Detail</h2>

    <template v-if="orderStore.loadingDetail.isLoading">
      <div>
        <span>Loading...</span>
      </div>
    </template>

    <template v-else-if="wrongId">
      <div>
        <span>
          Wrong ID
        </span>
      </div>
    </template>

    <template v-else-if="orderStore.orderDetail">
      <div class="grid">
        <OrderDetailLabeledValue label="Customer Name" :value="orderStore.orderDetail.customerName" />
        <OrderDetailLabeledValue label="Order Number" :value="orderStore.orderDetail.orderNumber" />
        <OrderDetailLabeledValue label="Date" :value="orderStore.orderDetail.date" />

        <div class="waypoints">
          <h3 class="waypoints-title">Waypoints</h3>

          <div>
            <div v-for="(waypoint, idx) in orderStore.orderDetail.waypoints" :key="idx" class="waypoint">
              <OrderDetailLabeledValue label="Street Name" :value="waypoint.streetName" />
              <OrderDetailLabeledValue label="Street Number" :value="waypoint.streetNumber" />
              <OrderDetailLabeledValue label="City" :value="waypoint.city" />
              <OrderDetailLabeledValue label="Country" :value="waypoint.country" />
              <OrderDetailLabeledValue label="ZIP" :value="waypoint.zipCode" />
              <OrderDetailLabeledValue label="Type" :value="waypoint.type" />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div>
        <span>
          Nothing to show
        </span>
      </div>
    </template>
  </main>
</template>

<style scoped>
.order-detail-wrapper .title {
  margin-bottom: 2rem;
}

.order-detail-wrapper .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  column-gap: 4rem;
}

.order-detail-wrapper .waypoints {
  grid-column: span 2;
}

.order-detail-wrapper .waypoints-title {
  margin-bottom: 1rem;
}

.order-detail-wrapper .waypoint {
  display: flex;
  column-gap: 1rem;
  row-gap: 3rem;
}
</style>
