<script setup lang="ts">
import { computed } from 'vue'
import type { WeatherData } from '@/types/weather'
import { conversToFahrenheit } from '@/utils/conversToFahrenheit'
import { useSettings } from '@/composables/useSettings'

const props = defineProps<{
  weatherData: WeatherData
}>()

const { units } = useSettings()

const displayTemperature = computed(() => {
  const celsius = props.weatherData.temperature.current

  if (units.value === 'imperial') {
    return Math.round(conversToFahrenheit(celsius))
  }
  return Math.round(celsius)
})

const displayFeelsLike = computed(() => {
  const celsius = props.weatherData.temperature.feels_like

  if (units.value === 'imperial') {
    return Math.round(conversToFahrenheit(celsius))
  }
  return Math.round(celsius)
})

const unitSymbol = computed(() => (units.value === 'metric' ? '°C' : '°F'))
</script>

<template>
  <div class="weather-info-container">
    <h1 class="city-name">{{ weatherData.city }}</h1>

    <div class="temperature-main">{{ displayTemperature }}{{ unitSymbol }}</div>

    <p class="condition-description">{{ weatherData.condition.description }}</p>

    <div class="details">
      <p>
        Feels like: <span>{{ displayFeelsLike }}{{ unitSymbol }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.weather-info-container {
  text-align: center;
}

.city-name {
  font-size: 48px;
  font-weight: 600;
}

.temperature-main {
  font-size: 48px;
  font-weight: 700;
  margin-top: 10px;
  color: var(--primary-text-color);
}

.condition-description {
  font-size: 20px;
  color: var(--secondary-text-color);
  text-transform: capitalize;
  margin-top: 10px;
}

.details {
  margin-top: 2rem;
  font-size: 16px;
  color: var(--secondary-text-color);
}

.details-wrap {
  color: var(--primary-text-color);
}
</style>
