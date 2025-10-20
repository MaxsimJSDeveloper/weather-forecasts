<script setup lang="ts">
import { getCityByLocation } from '@/utils/getCityByLocation'
import { getCoordinates } from '@/utils/getCoordinats'

const { getWeather } = defineProps<{
  getWeather: (city: string) => Promise<void>
}>()

async function detectLocation() {
  try {
    const coords = await getCoordinates()
    if (!coords) throw new Error('Geolocation unavailable')

    const city = await getCityByLocation(coords.lat, coords.lon)
    if (!city) throw new Error('Cannot find city')

    await getWeather(city)
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <div class="search-button-wrap">
    <button class="search-button" @click="detectLocation">🌍 Use my location</button>
  </div>
</template>

<style scoped>
.search-button-wrap {
  display: flex;
  justify-content: center;
}

.search-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;
  margin-top: 24px;
}

.search-button:hover {
  background-color: var(--accent-color-hover);
}
</style>
