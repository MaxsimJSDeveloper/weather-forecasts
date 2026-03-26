export const geo = {
  isUnsupported: () => !navigator.geolocation,

  getCoords: async (): Promise<{ lat: number; lon: number } | null> => {
    if (geo.isUnsupported()) return null

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 5000,
        })
      })

      return {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
    } catch (error) {
      if (error instanceof GeolocationPositionError && error.code === 1) {
        console.warn('User denied geolocation access.')
      } else {
        console.error('Error getting location:', error)
      }
      return null
    }
  },
  watchPermission: async (onUpdate: (state: PermissionState) => void) => {
    if (!navigator.permissions) return

    try {
      const status = await navigator.permissions.query({ name: 'geolocation' })

      onUpdate(status.state)

      status.onchange = () => {
        onUpdate(status.state)
      }
    } catch (e) {
      console.error('Permissions API error:', e)
    }
  },
}
