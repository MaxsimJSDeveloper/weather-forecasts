import axios from 'axios'
import { WEATHER_API } from './constants'

export async function fetchWeather(city: string) {
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${WEATHER_API.key}&units=${WEATHER_API.unit}`

  const response = await axios.get(`${apiUrl}`)

  return response.data
}
