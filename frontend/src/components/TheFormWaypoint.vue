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

        <FieldWrapper v-model="waypoint.streetName" label="Street name" id="type" required>
          <input type="text" />
        </FieldWrapper>

        <FieldWrapper v-model="waypoint.streetNumber" label="Street number" id="streetNumber" required>
          <input type="text" />
        </FieldWrapper>

        <FieldWrapper v-model="waypoint.city" label="City" id="city" required>
          <input type="text" />
        </FieldWrapper>

        <FieldWrapper v-model="waypoint.zipCode" label="Zip code" id="zipCode" required>
          <input type="text" />
        </FieldWrapper>

        <FieldWrapper v-model="waypoint.country" label="Country" id="country" required>
          <input type="text" />
        </FieldWrapper>

        <FieldWrapper v-model="waypoint.type" id="type" label="Type">
          <select>
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
