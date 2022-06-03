import axios from 'axios'

const defaultOptions = {
  baseURL: "http://localhost:5000/api",
  headers: {
    'Content-Type': 'application/json'
  },
}

const instance = axios.create(defaultOptions)

export default instance;