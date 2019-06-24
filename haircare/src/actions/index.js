import { axiosWithAuth } from '../utils/axiosWithAuth';

//loginPage actions & actionCreator
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch ({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS })
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}


// //ProfilePage actions & actionCreator
// //get request
// GET_STYLIST_START
// GET_STYLIST_SUCCESS
// GET_STYLIST_FAILURE

// //NewPostForm actions & actionCreator
// //post request
// ADD_POST_START
// ADD_POST_SUCCESS
// ADD_POST_FAILURE