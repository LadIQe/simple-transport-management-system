<script setup lang="ts">
import FieldWrapper from './common/FieldWrapper.vue';
import { type FormOrderWaypointItem, WaypointType } from '@/types.ts'

defineOptions({
  name: 'TheFormWaypoint'
})

const model = defineModel<FormOrderWaypointItem[]>({ required: true })

function addWaypoint() {
  const areAllWaypointsFilled = model.value.every(waypoint => Object.values(waypoint).every(value => value !== ''))

  if (!areAllWaypointsFilled) return

  model.value.push({
    streetName: '',
    streetNumber: '',
    city: '',
    zipCode: '',
    country: '',
    type: WaypointType.PICKUP
  })
}
</script>

<template>
  <div class="waypoints-wrapper">
    <div class="header">
      <span>Waypoints</span>
      <button type="button" @click="addWaypoint">+</button>
    </div>

    <div class="list">
      <div v-for="(waypoint, idx) in model" :key="idx">
        <div><span>Waypoint {{ idx + 1 }}</span></div>

        <FieldWrapper label="Street name">
          <input id="type" type="text" v-model="waypoint.streetName" required />
        </FieldWrapper>

        <FieldWrapper label="Street number">
          <input id="streetNumber" type="text" v-model="waypoint.streetNumber" required />
        </FieldWrapper>

        <FieldWrapper label="City">
          <input id="city" type="text" v-model="waypoint.city" required />
        </FieldWrapper>

        <FieldWrapper label="Zip code">
          <input id="zipCode" type="text" v-model="waypoint.zipCode" required />
        </FieldWrapper>

        <FieldWrapper label="Country">
          <input id="country" type="text" v-model="waypoint.country" required />
        </FieldWrapper>

        <FieldWrapper label="Type">
          <select id="type" v-model="waypoint.type">
            <option :value="WaypointType.PICKUP">Pickup</option>
            <option :value="WaypointType.DELIVERY">Delivery</option>
          </select>
        </FieldWrapper>
      </div>
    </div>
  </div>
</template>

<style scoped>
.waypoints-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.waypoints-wrapper .header {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.waypoints-wrapper .list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
</style>
