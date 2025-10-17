export interface WeatherData {
  city: string
  country: string
  coordinates: {
    longitude: number
    latitude: number
  }
  condition: {
    description: string
    icon_url: string
    icon: string
  }
  temperature: {
    current: number
    humidity: number
    feels_like: number
    pressure: number
  }
  wind: {
    speed: number
    degree: number
  }
  time: number
}
