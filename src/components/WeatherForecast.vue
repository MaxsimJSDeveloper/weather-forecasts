<script lang="ts" setup>
import type { WeatherData } from '@/types/weather'
import WeatherByCity from './WeatherByCity.vue'
import WeatherInfo from './WeatherInfo.vue'
import ChareLocationBtn from './ChareLocationBtn.vue'
import ModalWrapper from '@/shared/ModalWrapper.vue'

defineProps<{
  weatherData: WeatherData
  isModalOpen: boolean
  locationAllowed: boolean
  setCityByLocation: () => Promise<void>
  setCityManually: (city: string) => void
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <WeatherByCity :setCityManually="setCityManually" />
  <WeatherInfo :weatherData="weatherData" />
  <ModalWrapper :isOpen="isModalOpen" @close="emit('close')">
    <h2>Setting modal</h2>

    <div class="setting-row">
      <p v-if="locationAllowed">Geolocation access enabled</p>
      <p v-else-if="!locationAllowed">
        Geolocation access disabled. Click the button below to get the weather in your location.
      </p>
    </div>
    <ChareLocationBtn :setCityByLocation="setCityByLocation" />
  </ModalWrapper>
</template>
<style scoped>
.setting-row {
  margin-top: 16px;
}
</style>
