<script lang="ts" setup>
import type { WeatherData } from '@/types/weather'
import WeatherByCity from './WeatherByCity.vue'
import WeatherInfo from './WeatherInfo.vue'
import ChareLocationBtn from './ChareLocationBtn.vue'

defineProps<{
  getWeather: (city: string) => Promise<void>
  weatherData: WeatherData
  getWeatherByLocation: () => Promise<void>
}>()
</script>

<template>
  <div>
    <WeatherByCity :getWeather="getWeather" />
    <WeatherInfo :weatherData="weatherData" />
    <ChareLocationBtn :getWeatherByLocation="getWeatherByLocation" />
  </div>
</template>
