<script setup lang="ts">
import { useWeather } from './composables/useWeather'
import WeatherForecast from './components/WeatherForecast.vue'
import WeatherNotFound from './components/WeatherNotFound.vue'
import { useCity } from './composables/useCity'
import { onMounted } from 'vue'

const { weatherData, loading, error, notFound, getWeather } = useWeather()
const { city, setCityByLocation, setCityManually, initCity } = useCity()

onMounted(() => {
  initCity()
  getWeather(city.value)
})
</script>

<template>
  <main>
    <div v-if="loading">
      <h1>Loading...</h1>
    </div>

    <div v-else-if="error">
      <h1>Error</h1>
      <p>{{ error }}</p>
    </div>
    <WeatherNotFound v-else-if="notFound" @try-again="getWeather('Kyiv')" />
    <WeatherForecast
      v-else-if="weatherData"
      :setCityManually="setCityManually"
      :weatherData="weatherData"
      :setCityByLocation="setCityByLocation"
    />
  </main>
</template>
