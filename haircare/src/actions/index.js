import { axiosWithAuth } from '../utils/axiosWithAuth';

//loginPage actions & actionCreator
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch ({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/users/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS })
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}

//stylists actions & actionCreators
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getStylists = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  axiosWithAuth()
    .get('/stylists')
    .then(res => {
      console.log(res)
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    }).catch(err =>{
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
    })
}

//newAccount actions & actionCreator
export const NEW_ACCOUNT_START = 'NEW_ACCOUNT_START';
export const NEW_ACCOUNT_SUCCESS = 'NEW_ACCOUNT_SUCCESS';
export const NEW_ACCOUNT_FAILUTRE = 'NEW_ACCOUNT_FAILURE'

export const newAccount = newStylist => dispatch => {
  dispatch ({ type: NEW_ACCOUNT_START })
  axiosWithAuth()
    .post('/stylists', newStylist)
    .then(res => {
      localStorage.setItem('token')
      dispatch({ type: NEW_ACCOUNT_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: NEW_ACCOUNT_FAILUTRE, payload: err })
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