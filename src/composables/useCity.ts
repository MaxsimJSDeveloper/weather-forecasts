import { ref } from 'vue'
import { getCityByLocation } from '@/utils/getCityByLocation'
import { useToast } from 'vue-toast-notification'
import { getCoordinates } from '@/utils/getCoordinates'
import { useSettings } from './useSettings'

const city = ref(localStorage.getItem('city') || 'Kyiv')

export function useCity() {
  const toast = useToast()
  const { setLocationPermission } = useSettings()

  function setCityManually(newCity: string) {
    if (newCity.trim()) {
      city.value = newCity
    }
  }

  async function setCityByLocation() {
    const coords = await getCoordinates()

    if (coords) {
      const locationCity = await getCityByLocation(coords.lat, coords.lon)
      city.value = locationCity
      setLocationPermission(true)

      localStorage.setItem('city', locationCity)

      toast.info(`Your location is set to ${locationCity}`)
    } else {
      setLocationPermission(false)

      toast.warning('Could not get location. User denied or error.')
    }
  }

  return {
    city,
    setCityManually,
    setCityByLocation,
  }
}
