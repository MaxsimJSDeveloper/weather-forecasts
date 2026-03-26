import type { Units } from '@/types/units'
import { ref, watch } from 'vue'
import { storage } from '@/utils/storage'

const units = ref<Units>(storage.get<Units>('units', 'metric'))

export function useSettings() {
  watch(units, (newUnits) => {
    storage.set('units', newUnits)
  })

  return { units }
}
