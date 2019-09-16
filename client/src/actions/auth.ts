import axios from 'axios'
import history from '../lib/history';

const API_ROOT = process.env.API_ROOT

export const signUp = (email: string, password: string) => {
  return axios.post(`${API_ROOT}/api/auth/signup`, { email, password })
}

export const login = (email: string, password: string) => (dispatch: any) => {
  dispatch({ type: "AUTH_LOGIN"})

  axios.post(`${API_ROOT}/api/auth/login`, { email, password })
    .then((resp) => {
      dispatch({ type: "AUTH_LOGIN_OK", payload: resp.data.jwt})
      history.push('/dashboard')
    })
    .catch((err) => {
      dispatch({ type: "AUTH_LOGIN_ERR", error: err})
    })
}
