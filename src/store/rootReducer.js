import { combineReducers } from 'redux';
import navigationReducer from '../reducers/navigationReducer.js'
import coursePackModule from '../reducers/coursePackModule.js'
import coursePackYearListing from '../reducers/coursePackYearListing.js'
import lots from '../reducers/lots.js'
const rootReducer = combineReducers({navigationReducer,coursePackModule,coursePackYearListing,lots});
console.log(lots)
export default rootReducer;
