<script lang="ts" setup>
import { useSettings } from '@/composables/useSettings'
import ChareLocationBtn from './ChareLocationBtn.vue'

defineProps<{
  locationAllowed: boolean
  setCityByLocation: () => Promise<void>
}>()

const { units } = useSettings()
</script>

<template>
  <div class="settings-content">
    <h2 class="modal-title">Settings</h2>

    <div class="settings-group">
      <h3 class="settings-group-title">Geolocation</h3>
      <div class="setting-row">
        <p class="setting-row-text" v-if="locationAllowed">
          Geolocation access enabled. Your default city will update automatically.
        </p>
        <p class="setting-row-text" v-else>
          Geolocation access disabled. Click the button to get weather for your location.
        </p>
      </div>
      <ChareLocationBtn :setCityByLocation="setCityByLocation" />
    </div>

    <hr class="divider" />

    <div class="settings-group">
      <h3 class="settings-group-title">Temperature Units</h3>
      <form class="radio-toggle">
        <label class="toggle-label">
          <input
            class="radio-toggle-input"
            type="radio"
            name="temperature"
            value="metric"
            v-model="units"
          />
          <span>°C</span>
        </label>
        <label class="toggle-label">
          <input
            class="radio-toggle-input"
            type="radio"
            name="temperature"
            value="imperial"
            v-model="units"
          />
          <span>°F</span>
        </label>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
}

.settings-group {
  margin-bottom: 24px;
}

.settings-group-title {
  font-size: 16px;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.setting-row-text {
  font-size: 14px;
  line-height: 1.5;
  color: var(--secondary-text-color);
}

.divider {
  border: none;
  border-top: 1px solid var(--border-color);
  margin: 16px 0 24px 0;
}

.radio-toggle {
  display: flex;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.radio-toggle .toggle-label {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  background: var(--primary-bg-color);
  color: var(--secondary-text-color);
  transition: all 0.2s ease;
}

.radio-toggle .toggle-label:first-of-type {
  border-right: 1px solid var(--border-color);
}

.radio-toggle-input {
  display: none;
}

.radio-toggle-input:checked {
  color: #fff;
}

.radio-toggle .toggle-label:has(.radio-toggle-input:checked) {
  background: var(--accent-color);
  color: #fff;
  box-shadow: 0 0 10px rgba(66, 185, 131, 0.5);
}
</style>
