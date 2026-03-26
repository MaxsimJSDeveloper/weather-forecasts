import { fetchWeather } from '@/api/fetchWeather'
import type { WeatherData } from '@/types/weather'
import { ref, watch } from 'vue'
import { useCity } from './useCity'
import { notify } from '@/utils/notify'

export function useWeather() {
  const weatherData = ref<WeatherData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const { city } = useCity()

  async function getWeather(cityName: string) {
    if (!cityName) return
    loading.value = true
    error.value = null

    try {
      const data = await fetchWeather(cityName)

      if (data.status === '404' || data.message?.includes('not found')) {
        throw new Error('City not found')
      }

      weatherData.value = data
      notify.success(`Weather for ${cityName} updated`)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load weather'
      error.value = message
      notify.error(message)
    } finally {
      loading.value = false
    }
  }

  watch(city, (newCity) => getWeather(newCity))

  return { weatherData, loading, error, getWeather }
}
