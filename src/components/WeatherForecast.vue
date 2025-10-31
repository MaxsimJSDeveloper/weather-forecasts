<script lang="ts" setup>
import type { WeatherData } from '@/types/weather'
import WeatherByCity from './WeatherByCity.vue'
import WeatherInfo from './WeatherInfo.vue'
import ChareLocationBtn from './ChareLocationBtn.vue'
import ModalWrapper from '@/shared/ModalWrapper.vue'

defineProps<{
  weatherData: WeatherData
  isModalOpen: boolean
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
    <ChareLocationBtn :setCityByLocation="setCityByLocation" />
  </ModalWrapper>
</template>
