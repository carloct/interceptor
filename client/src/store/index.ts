import { createStore, combineReducers, Reducer} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { authReducer } from './auth'
import { AppState } from './types';

const reducer: Reducer<AppState> = combineReducers<AppState>({
  auth: authReducer
})

const store = createStore(reducer, /* preloadedState */ devToolsEnhancer({}))

export default store


