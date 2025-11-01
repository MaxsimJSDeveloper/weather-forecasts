import { ref } from 'vue'
import { getCityByLocation } from '@/utils/getCityByLocation'
import { useToast } from 'vue-toast-notification'
import { getCoordinates } from '@/utils/getCoordinates'

const city = ref(localStorage.getItem('city') || 'Kyiv')
const locationAllowed = ref(localStorage.getItem('isLocationAllowed') === 'true')

export function useCity() {
  const toast = useToast()

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
      locationAllowed.value = true

      localStorage.setItem('city', locationCity)
      localStorage.setItem('isLocationAllowed', 'true')
      toast.info(`Your location is set to ${locationCity}`)
    } else {
      locationAllowed.value = false
      localStorage.setItem('isLocationAllowed', 'false')

      toast.warning('Could not get location. User denied or error.')
    }
  }

  return {
    city,
    locationAllowed,
    setCityManually,
    setCityByLocation,
  }
}
