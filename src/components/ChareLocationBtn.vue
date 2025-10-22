<script setup lang="ts">
const { setCityByLocation } = defineProps<{
  setCityByLocation: () => void
}>()
</script>

<template>
  <div class="search-button-wrap">
    <button class="search-button" @click="setCityByLocation">🌍 Use my location</button>
  </div>
</template>

<style scoped>
.search-button-wrap {
  display: flex;
  justify-content: center;
}

.search-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;
  margin-top: 24px;
}

.search-button:hover {
  background-color: var(--accent-color-hover);
}
</style>
