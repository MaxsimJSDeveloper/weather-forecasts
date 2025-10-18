<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  getWeather: (city: string) => void
}>()

const city = ref('')
</script>

<template>
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      v-model="city"
      placeholder="Enter city name"
      @keyup.enter="getWeather(city)"
    />
    <button class="search-button" @click="getWeather(city)">Search</button>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem; /* Расстояние между инпутом и кнопкой */
}

.search-input {
  flex-grow: 1; /* Инпут займет все доступное пространство */
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
}

.search-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: var(--accent-color-hover);
}
</style>
