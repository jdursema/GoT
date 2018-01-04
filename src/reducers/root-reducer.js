import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houseReducer } from './house-reducer';

const rootReducer = combineReducers({
  fake,
  Houses: houseReducer
});


export default rootReducer;
