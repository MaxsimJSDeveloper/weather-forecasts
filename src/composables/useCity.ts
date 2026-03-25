import { ref } from 'vue'
import { getCityByLocation } from '@/utils/getCityByLocation'
import { useToast } from 'vue-toast-notification'
import { getCoordinates } from '@/utils/getCoordinates'
import { useSettings } from './useSettings'

const city = ref(localStorage.getItem('city') || 'Kyiv')
const permissionState = ref<PermissionState | 'loading'>('loading')

export function useCity() {
  const toast = useToast()
  const { setLocationPermission } = useSettings()

  function setCityManually(newCity: string) {
    if (newCity.trim()) {
      city.value = newCity
    }
  }

  function resetToDefault() {
    city.value = 'Kyiv'
    localStorage.setItem('city', 'Kyiv')
    setLocationPermission(false)
  }

  async function setCityByLocation(isSilent = false) {
    const coords = await getCoordinates()

    if (coords) {
      const locationCity = await getCityByLocation(coords.lat, coords.lon)

      if (city.value !== locationCity && !isSilent) {
        toast.info(`Location updated: ${locationCity}`)
      } else if (!isSilent) {
        toast.success(`You are already in ${locationCity}`)
      }

      city.value = locationCity
      localStorage.setItem('city', locationCity)
      setLocationPermission(true)
    } else {
      resetToDefault()
      if (!isSilent) toast.error('Location access denied. Resetting to Kyiv.')
    }
  }

  async function checkBrowserPermissions() {
    if (!navigator.permissions) return

    try {
      const status = await navigator.permissions.query({ name: 'geolocation' })
      permissionState.value = status.state

      if (status.state === 'granted') {
        await setCityByLocation(true)
      } else if (status.state === 'denied') {
        resetToDefault()
      }

      status.onchange = () => {
        permissionState.value = status.state
        if (status.state === 'denied') resetToDefault()
      }
    } catch (e) {
      console.error('Permissions API error:', e)
    }
  }

  return {
    city,
    permissionState,
    setCityManually,
    setCityByLocation,
    checkBrowserPermissions,
  }
}
