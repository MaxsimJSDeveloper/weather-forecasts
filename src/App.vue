<script setup lang="ts">
import { onMounted } from 'vue'
import { useWeather } from './composables/useWeather'
import WeatherForecast from './components/WeatherForecast.vue'
import WeatherNotFound from './components/WeatherNotFound.vue'

const { weatherData, loading, error, notFound, getWeather } = useWeather()

onMounted(() => {
  getWeather('Kyiv')
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
    <WeatherForecast v-else-if="weatherData" :getWeather="getWeather" :weatherData="weatherData" />
  </main>
</template>
