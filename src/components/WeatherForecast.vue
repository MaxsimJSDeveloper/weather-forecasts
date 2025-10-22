<script lang="ts" setup>
import type { WeatherData } from '@/types/weather'
import WeatherByCity from './WeatherByCity.vue'
import WeatherInfo from './WeatherInfo.vue'
import ChareLocationBtn from './ChareLocationBtn.vue'

defineProps<{
  weatherData: WeatherData
  setCityByLocation: () => Promise<void>
  setCityManually: (city: string) => void
}>()
</script>

<template>
  <div>
    <WeatherByCity :setCityManually="setCityManually" />
    <WeatherInfo :weatherData="weatherData" />
    <ChareLocationBtn :setCityByLocation="setCityByLocation" />
  </div>
</template>
