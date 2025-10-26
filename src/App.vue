<script setup lang="ts">
import { useWeather } from './composables/useWeather'
import WeatherForecast from './components/WeatherForecast.vue'

import { useCity } from './composables/useCity'
import { onMounted } from 'vue'
import Loader from './ui/Loader.vue'

const { weatherData, loading, error, getWeather } = useWeather()
const { city, setCityByLocation, setCityManually, initCity } = useCity()

onMounted(() => {
  initCity()
  getWeather(city.value)
})
</script>

<template>
  <main>
    <div class="container">
      <div v-if="loading">
        <Loader />
      </div>

      <div v-else-if="error">
        <h1>Error</h1>
        <p>{{ error }}</p>
      </div>

      <WeatherForecast
        v-else-if="weatherData"
        :setCityManually="setCityManually"
        :weatherData="weatherData"
        :setCityByLocation="setCityByLocation"
      />
    </div>
  </main>
</template>
<style scoped>
.container {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
  max-width: 450px;
  background: var(--container-bg-color);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 25px var(--shadow-color);
}
</style>
