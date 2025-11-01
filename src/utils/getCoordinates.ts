export async function getCoordinates(): Promise<{ lat: number; lon: number } | null> {
  if (!navigator.geolocation) {
    console.error('Geolocation is not supported by this browser.')
    return null
  }

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
}
