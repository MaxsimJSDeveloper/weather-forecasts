import { useToast } from 'vue-toast-notification'

const toast = useToast()

const DEFAULT_DURATION = 3000
const ERROR_DURATION = 5000

export const notify = {
  success: (message: string) => {
    toast.success(message, { duration: DEFAULT_DURATION })
  },
  error: (message: string) => {
    toast.error(message, { duration: ERROR_DURATION })
  },
  info: (message: string) => {
    toast.info(message, { duration: DEFAULT_DURATION })
  },
  warning: (message: string) => {
    toast.warning(message, { duration: DEFAULT_DURATION })
  },
}
