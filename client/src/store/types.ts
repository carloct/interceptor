export interface ActionType {
  type: string;
  payload?: any;
  error?: any;
}

export interface AuthState {
  jwt: string | null
  isSubmitting: boolean
}

export interface AppState {
  auth: AuthState
}
