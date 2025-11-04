<script lang="ts" setup>
import type { WeatherData } from '@/types/weather'
import WeatherByCity from './WeatherByCity.vue'
import WeatherInfo from './WeatherInfo.vue'
import ModalWrapper from '@/shared/ModalWrapper.vue'
import SettingModal from './SettingModal.vue'
import IconWrapper from '@/shared/IconWrapper.vue'

defineProps<{
  weatherData: WeatherData
  isModalOpen: boolean
  locationAllowed: boolean
  setCityByLocation: () => Promise<void>
  setCityManually: (city: string) => void
  setModalOpen: () => void
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="controls-header">
    <WeatherByCity :setCityManually="setCityManually" />

    <button class="setting-btn" @click="setModalOpen">
      <IconWrapper id="setting"></IconWrapper>
    </button>
  </div>
  <WeatherInfo :weatherData="weatherData" />
  <ModalWrapper :isOpen="isModalOpen" @close="emit('close')">
    <SettingModal :locationAllowed="locationAllowed" :setCityByLocation="setCityByLocation" />
  </ModalWrapper>
</template>
<style scoped>
.controls-header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
}

.setting-btn {
  border: 1px solid var(--border-color);
  background-color: transparent;
  padding: 8px;
  border-radius: 8px;
  color: var(--secondary-text-color);
  transition: all 0.2s;
}

.setting-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-color: var(--accent-color);
  color: var(--accent-color);
}
</style>
