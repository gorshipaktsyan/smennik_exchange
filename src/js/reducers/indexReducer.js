import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import rateReducer from './rateReducer';

//Reducers
export const reducers = combineReducers({
   currencyList: currencyReducer,
   rateList: rateReducer,
});