<script setup lang="ts">
import { citySchema } from '@/validation/citySchema'
import { useForm } from 'vee-validate'

const props = defineProps<{
  setCityManually: (city: string) => void
}>()

const { errors, meta, defineField, handleSubmit } = useForm({
  validationSchema: citySchema,
})

const onSearch = handleSubmit((values) => {
  props.setCityManually(values.city.trim())
})

const [city, cityAttrs] = defineField('city')
</script>

<template>
  <form class="search-container" @submit="onSearch">
    <div class="input-wrapper">
      <input
        type="text"
        class="search-input"
        :class="{ 'input-error': errors.city }"
        v-model="city"
        v-bind="cityAttrs"
        placeholder="Enter city name"
      />
      <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
    </div>

    <button class="search-button" :disabled="!meta.valid">Search</button>
  </form>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  flex-grow: 1;
}

.search-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 8px;
  width: 100%;
}

.search-input {
  flex-grow: 1;
  padding: 12px 18px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  width: 85%;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.search-input:focus {
  outline: none;
}

.error-message {
  color: var(--error-color);
  position: absolute;
  font-size: 12px;
  bottom: -20px;
  left: 0;
}

.search-input.input-error {
  border-color: var(--error-color);
}

.search-button {
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: var(--accent-color-hover);
}

.search-button:disabled {
  cursor: not-allowed;
}
</style>
