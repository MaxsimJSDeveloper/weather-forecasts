<script setup lang="ts">
import type { WeatherData } from '@/types/weather'

defineProps<{
  weatherData: WeatherData
}>()
</script>

<template>
  <div class="weather-info-container">
    <h1 class="city-name">{{ weatherData.city }}</h1>

    <div class="temperature-main">{{ Math.round(weatherData.temperature.current) }}°C</div>

    <p class="condition-description">{{ weatherData.condition.description }}</p>

    <div class="details">
      Feels like:
      <p class="details-wrap">{{ Math.round(weatherData.temperature.feels_like) }}°C</p>
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
