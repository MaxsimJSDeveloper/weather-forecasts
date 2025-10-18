<script lang="ts" setup>
import type { WeatherData } from '@/types/weather'
import WeatherByCity from './WeatherByCity.vue'
import WeatherInfo from './WeatherInfo.vue'

defineProps<{
  getWeather: (city: string) => void
  weatherData: WeatherData
}>()
</script>

<template>
  <div>
    <WeatherByCity :getWeather="getWeather" />
    <WeatherInfo :weatherData="weatherData" />
  </div>
</template>
