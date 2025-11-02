import type { Units } from '@/types/units'
import { ref, watch } from 'vue'

const locationAllowed = ref(localStorage.getItem('isLocationAllowed') === 'true')
const units = ref<Units>((localStorage.getItem('units') as Units) || 'metric')

export function useSettings() {
  function setLocationPermission(isAllowed: boolean) {
    locationAllowed.value = isAllowed
    localStorage.setItem('isLocationAllowed', isAllowed ? 'true' : 'false')
  }

  watch(units, (newUnits) => {
    localStorage.setItem('units', newUnits)
  })

  return {
    locationAllowed,
    units,
    setLocationPermission,
  }
}
