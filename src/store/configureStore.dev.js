import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../containers/DevTools';
import rootReducer from './rootReducer';
const thunk = require('redux-thunk')
const finalCreateStore = compose(
  // Middleware you want to use in development:
  //applyMiddleware(d1, d2, d3),
  applyMiddleware(thunk),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {

  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
   if (module.hot) {
     module.hot.accept('./rootReducer.js', () =>
       store.replaceReducer(require('./rootReducer.js')/*.default if you use Babel 6+ */)
     );
   }

  return store;
}
