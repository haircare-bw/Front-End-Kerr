import { combineReducers } from 'redux';
import { stylistReducer } from './stylistReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
  loginReducer,
  stylistReducer
})