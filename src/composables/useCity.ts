import { ref } from 'vue'
import { storage } from '@/utils/storage'
import { geo } from '@/utils/geolocation'
import { getCityByLocation } from '@/utils/getCityByLocation'
import { notify } from '@/utils/notify'

const city = ref(storage.get<string>('city', 'Kyiv'))
const permissionState = ref<PermissionState | 'loading'>('loading')

export function useCity() {
  const updateCity = (name: string) => {
    if (!name.trim()) return
    city.value = name
    storage.set('city', name)
  }

  const resetToDefault = () => updateCity('Kyiv')

  async function setCityByLocation(isSilent = false) {
    const coords = await geo.getCoords()

    if (!coords) {
      resetToDefault()
      if (!isSilent) notify.error('Location access denied. Resetting to Kyiv.')
      return
    }

    const locationCity = await getCityByLocation(coords.lat, coords.lon)

    if (locationCity) {
      if (city.value !== locationCity && !isSilent) {
        notify.info(`Location updated: ${locationCity}`)
      }
      updateCity(locationCity)
    }
  }

  async function initGeoSync() {
    return new Promise<void>((resolve) => {
      geo.watchPermission((newState) => {
        permissionState.value = newState

        if (newState === 'granted') {
          setCityByLocation(true).finally(() => resolve())
        } else {
          if (newState === 'denied') resetToDefault()
          resolve()
        }
      })
    })
  }

  return {
    city,
    permissionState,
    setCityManually: (name: string) => updateCity(name),
    setCityByLocation,
    initGeoSync,
  }
}
