import { combineReducers } from 'redux';
import { stylistReducer } from './stylistReducer';
import { loginReducer } from './loginReducer';
import { profileReducer } from './profileReducer';

export default combineReducers({
  loginReducer,
  stylistReducer,
  profileReducer
})