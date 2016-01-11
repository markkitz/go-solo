import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
const thunk = require('redux-thunk')
const finalCreateStore = applyMiddleware(thunk);

export default function configureStore(initialState) {

  return finalCreateStore(rootReducer, initialState);
}
