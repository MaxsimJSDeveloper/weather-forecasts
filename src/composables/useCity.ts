import { ref } from 'vue'
import { getCityByLocation } from '@/utils/getCityByLocation'
import { useToast } from 'vue-toast-notification'
import { getCoordinates } from '@/utils/getCoordinates'

const city = ref('Kyiv')

export function useCity() {
  const toast = useToast()

  function initCity() {
    const savedCity = localStorage.getItem('city')
    if (savedCity) {
      city.value = savedCity
    } else {
      city.value = 'Kyiv'
      localStorage.setItem('city', 'Kyiv')
    }
  }

  function setCityManually(newCity: string) {
    if (newCity && newCity.trim()) {
      city.value = newCity.trim()
    }
  }

  async function setCityByLocation() {
    try {
      const coords = await getCoordinates()
      if (!coords) return

      const locationCity = await getCityByLocation(coords.lat, coords.lon)
      city.value = locationCity
      localStorage.setItem('city', locationCity)

      toast.info(`Your location is set to ${locationCity}`)
    } catch (err) {
      if (err instanceof GeolocationPositionError && err.code === 1) {
        toast.warning('You denied access to your location.')
      } else {
        toast.error('Could not determine your location.')
      }
      console.error(err)
    }
  }

  return {
    city,
    setCityManually,
    setCityByLocation,
    initCity,
  }
}
