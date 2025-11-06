<script setup lang="ts">
import { useWeather } from './composables/useWeather'
import WeatherForecast from './components/WeatherForecast.vue'

import { useCity } from './composables/useCity'
import { onMounted, ref } from 'vue'
import BaseLoader from './ui/BaseLoader.vue'

import iconSprite from '@/assets/symbol-defs.svg?raw'
import { useSettings } from './composables/useSettings'
import AppWrapper from './shared/AppWrapper.vue'
import ApiError from './shared/ApiError.vue'

const { weatherData, loading, error, getWeather } = useWeather()
const { city, setCityByLocation, setCityManually } = useCity()
const { locationAllowed } = useSettings()

const isModalOpen = ref(false)

onMounted(() => {
  getWeather(city.value)
})

const setModalOpen = () => {
  isModalOpen.value = true
}
</script>

<template>
  <div v-html="iconSprite" style="display: none"></div>
  <main>
    <AppWrapper>
      <BaseLoader v-if="loading" />

      <ApiError v-else-if="error" :error="error" />

      <WeatherForecast
        v-else-if="weatherData"
        :setCityManually="setCityManually"
        :weatherData="weatherData"
        :setCityByLocation="setCityByLocation"
        :isModalOpen="isModalOpen"
        :locationAllowed="locationAllowed"
        @close="isModalOpen = false"
        :setModalOpen="setModalOpen"
      />
    </AppWrapper>
  </main>
</template>
