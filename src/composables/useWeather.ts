import { fetchWeather } from '@/api/fetchWeather'
import type { WeatherData } from '@/types/weather'
import { ref, watch } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useCity } from './useCity'

export function useWeather() {
  const weatherData = ref<WeatherData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const notFound = ref(false)

  const toast = useToast()

  const { city } = useCity()

  async function getWeather(city: string) {
    if (!city) return

    loading.value = true
    error.value = null
    weatherData.value = null
    notFound.value = false

    try {
      const data = await fetchWeather(city)
      if (data.status === '404' || data.message?.includes('not found')) {
        toast.error(`City not found`, { duration: 5000 })
        notFound.value = true
        return
      }
      weatherData.value = data

      toast.success(`Weather data for ${city} loaded successfully!`, { duration: 3000 })
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
        toast.error(`Error: ${err.message}`, { duration: 5000 })
      } else {
        error.value = 'Unknown error occurred'
        toast.error('An unknown error occurred.', { duration: 5000 })
      }
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  watch(city, (newCity) => {
    getWeather(newCity)
  })

  return { weatherData, loading, error, notFound, getWeather }
}
