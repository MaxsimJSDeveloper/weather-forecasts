export async function getCoordinates(): Promise<{ lat: number; lon: number } | null> {
  if (!navigator.geolocation) {
    console.error('Geolocation is not supported by this browser.')
    return null
  }

  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })

  return {
    lat: (position as GeolocationPosition).coords.latitude,
    lon: (position as GeolocationPosition).coords.longitude,
  }
}
