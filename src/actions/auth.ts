import axios from 'axios'

const API_ROOT = process.env.API_ROOT

export const signUp = (email: string, password: string) => {
  return axios.post(`${API_ROOT}/api/auth/signup`, { email, password })
}
