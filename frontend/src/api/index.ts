import axios from 'axios'
import { useToast } from 'vue-toast-notification'

const toast = useToast()

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1'
})

api.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response

    if (status === 400 && error.response.data) {
      const { data } = error.response
      let errorString = ''

      Object.entries(data).forEach(([key, value]) => {
        errorString += `<div>${key}: ${value}</div>`
      })

      toast.error(errorString)
    } else if (error.response?.data?.detail) {
      toast.error(error.response.data.detail)
    } else {
      toast.error(error.message)
    }
  }
)

export default api
