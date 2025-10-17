<script setup lang="ts">
import type { WeatherData } from '@/types/weather'

defineProps<{
  weatherData: WeatherData
}>()
</script>

<template>
  <div>
    <h1>{{ weatherData.city }}</h1>
    <p>Temperature: {{ Math.round(weatherData.temperature.current) }}°C</p>
    <p>Feels like: {{ Math.round(weatherData.temperature.feels_like) }}°C</p>
    <p>{{ weatherData.condition.description }}</p>
  </div>
</template>
