import { fetchWeather } from '@/api/fetchWeather'
import type { WeatherData } from '@/types/weather'
import { ref } from 'vue'

export function useWeather() {
  const weatherData = ref<WeatherData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function getWeather(city: string) {
    loading.value = true
    error.value = null
    weatherData.value = null
    try {
      const data = await fetchWeather(city)
      weatherData.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Произошла неизвестная ошибка.'
      }
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return { weatherData, loading, error, getWeather }
}
