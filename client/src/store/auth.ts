import { ActionType, AuthState } from './types';

const initialState: AuthState = {
  isSubmitting: false,
  jwt: null,
}


export const authReducer = (state = initialState, action: ActionType) => {
  console.log(action)
  switch (action.type) {
    case 'AUTH_LOGIN':
      return { ...state, isSubmitting: true }
    case 'AUTH_SIGNUP_OK':
      return {...state, jwt: action.payload.jwt}
    case 'AUTH_SIGNUP_ERR':
      return {...state, jwt: null}
    default:
      return state;
  }
}
