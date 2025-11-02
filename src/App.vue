<script setup lang="ts">
import { useWeather } from './composables/useWeather'
import WeatherForecast from './components/WeatherForecast.vue'

import { useCity } from './composables/useCity'
import { onMounted, ref } from 'vue'
import BaseLoader from './ui/BaseLoader.vue'
import IconWrapper from './shared/IconWrapper.vue'

import iconSprite from '@/assets/symbol-defs.svg?raw'
import { useSettings } from './composables/useSettings'

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
    <div class="container">
      <div v-if="loading">
        <BaseLoader />
      </div>

      <div v-else-if="error">
        <h1>Error</h1>
        <p>{{ error }}</p>
      </div>

      <section v-else-if="weatherData" class="weather-content">
        <button class="setting-btn" @click="setModalOpen">
          <IconWrapper id="setting"></IconWrapper>
        </button>

        <WeatherForecast
          :setCityManually="setCityManually"
          :weatherData="weatherData"
          :setCityByLocation="setCityByLocation"
          :isModalOpen="isModalOpen"
          :locationAllowed="locationAllowed"
          @close="isModalOpen = false"
        />
      </section>
    </div>
  </main>
</template>
<style scoped>
.weather-content {
  display: flex;
  flex-direction: column;
}

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

.setting-btn {
  border: none;
  background-color: inherit;
  margin-bottom: 16px;
  margin-left: auto;
}
</style>
