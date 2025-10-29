# Weather Forecast Vue App

A modern and responsive weather forecast application built with Vue.js 3 and TypeScript. The app provides real-time weather data and focuses on a seamless user experience by offering multiple ways to get a forecast.

## ✨ Features

This project highlights a flexible and user-centric approach to fetching data:

- **Multiple Ways to Get a Forecast:**
  - **Search by City:** Manually search for any city in the world. This is a temporary search and does not overwrite your saved preferences.
  - **Geolocation:** Use your current location to get an instant forecast. If you grant permission, your location will be saved as the new default for future visits.

- **Smart Persistence:**
  - The application remembers your last chosen city (either from geolocation or the default "Kyiv") in `localStorage`.
  - If you later revoke location permissions, the app gracefully falls back to using the last saved city without breaking.

## 🛠️ Technologies & Libraries

Vue 3, Vite, TypeScript, Axios, VeeValidate, Yup, epic-spinners, vue-toast-notification.

## 🚀 Project Setup

### 1. Clone & Install

```bash
git clone [https://github.com/your-username/weather-forecasts.git](https://github.com/your-username/weather-forecasts.git)
cd weather-forecasts
npm install
```
