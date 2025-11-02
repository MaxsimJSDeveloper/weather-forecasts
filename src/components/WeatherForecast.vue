<script lang="ts" setup>
import type { WeatherData } from '@/types/weather'
import WeatherByCity from './WeatherByCity.vue'
import WeatherInfo from './WeatherInfo.vue'
import ModalWrapper from '@/shared/ModalWrapper.vue'
import SettingModal from './SettingModal.vue'

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
    <SettingModal :locationAllowed="locationAllowed" :setCityByLocation="setCityByLocation" />
  </ModalWrapper>
</template>
