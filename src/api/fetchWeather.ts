import axios from 'axios'
import { API } from './constants'

export async function fetchWeather(city: string) {
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${API.key}&units=${API.unit}`

  const response = await axios.get(`${apiUrl}`)

  return response.data
}
