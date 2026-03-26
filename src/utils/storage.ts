export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    const item = localStorage.getItem(key)
    if (!item) return defaultValue

    try {
      return JSON.parse(item) as T
    } catch (e) {
      console.log(e)
      return item as unknown as T
    }
  },

  set: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value))
  },

  remove: (key: string): void => {
    localStorage.removeItem(key)
  },
}
