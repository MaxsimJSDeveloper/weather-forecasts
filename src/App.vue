<script setup lang="ts">
import { onMounted } from 'vue'
import { useWeather } from './composables/useWeather'
import WeatherInfo from './components/WeatherInfo.vue'

const { weatherData, loading, error, getWeather } = useWeather()

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

    <WeatherInfo v-else-if="weatherData" :weatherData="weatherData" />
  </main>
</template>
