import { fetchWeather } from '@/api/fetchWeather'
import type { WeatherData } from '@/types/weather'
import { getCityByLocation } from '@/utils/getCityByLocation'
import { getCoordinates } from '@/utils/getCoordinates'
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

export function useWeather() {
  const weatherData = ref<WeatherData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const notFound = ref(false)

  const toast = useToast()

  async function getWeather(city: string) {
    if (!city.trim()) {
      return
    }

    loading.value = true
    error.value = null
    weatherData.value = null
    notFound.value = false

    try {
      const data = await fetchWeather(city)
      if (data.status === '404' || data.message?.includes('not found')) {
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

  async function getWeatherByLocation() {
    loading.value = true
    error.value = null
    notFound.value = false

    try {
      const coords = await getCoordinates()
      if (!coords) {
        toast.info('You denied access to your location.')
        return
      }
      const city = await getCityByLocation(coords.lat, coords.lon)
      await getWeather(city)
    } catch (err) {
      if (err instanceof GeolocationPositionError && err.code === 1) {
        toast.info('You denied access to your location.')
      } else if (err instanceof Error) {
        toast.warning(err.message)
      } else {
        toast.error('An unknown error occurred during location detection.')
      }
    } finally {
      loading.value = false
    }
  }

  return { weatherData, loading, error, notFound, getWeather, getWeatherByLocation }
}
