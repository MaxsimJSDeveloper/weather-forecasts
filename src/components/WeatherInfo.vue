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
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.temperature-main {
  font-size: 4rem;
  font-weight: 700;
  margin: 1rem 0;
  color: var(--primary-text-color);
}

.condition-description {
  font-size: 1.25rem;
  color: var(--secondary-text-color);
  text-transform: capitalize;
  margin-top: -0.5rem;
}

.details {
  margin-top: 2rem;
  font-size: 1.1rem;
  color: var(--secondary-text-color);
}

.details-wrap {
  color: var(--primary-text-color);
}
</style>
