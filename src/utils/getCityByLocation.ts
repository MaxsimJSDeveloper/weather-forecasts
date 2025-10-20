import { GEOCODING_API } from '@/api/constants'
import axios from 'axios'

export async function getCityByLocation(lat: number, lon: number) {
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${lon}&key=${GEOCODING_API.key}&language=en`

  const response = await axios.get(apiUrl)

  if (response.data) {
    const components = response.data.results[0].components
    const city = components.city || components.town || components.village
    return city
  } else {
    console.error('City not found for these coordinates.')
  }
}
