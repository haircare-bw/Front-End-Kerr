import { axiosWithAuth } from '../utils/axiosWithAuth';

//loginPage actions & actionCreator
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch ({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/api/auth/login', creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS })
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}

//stylists actions & actionCreators
export const FETCH_STYLIST_START = 'FETCH_STYLIST_START';
export const FETCH_STYLIST_SUCCESS = 'FETCH_STYLIST_SUCCESS';
export const FETCH_STYLIST_FAILURE = 'FETCH_STYLIST_FAILURE';

export const getStylists = () => dispatch => {
  dispatch({ type: FETCH_STYLIST_START })
  axiosWithAuth()
    .get('/api/stylists')
    .then(res => {
      console.log('stylists', res.data)
      dispatch({ type: FETCH_STYLIST_SUCCESS, payload: res.data })
    }).catch(err =>{
      dispatch({ type: FETCH_STYLIST_FAILURE, payload: err.response })
    })
}

//newAccount actions & actionCreator
export const NEW_ACCOUNT_START = 'NEW_ACCOUNT_START';
export const NEW_ACCOUNT_SUCCESS = 'NEW_ACCOUNT_SUCCESS';
export const NEW_ACCOUNT_FAILURE = 'NEW_ACCOUNT_FAILURE'

export const newAccount = newStylist => dispatch => {
  dispatch ({ type: NEW_ACCOUNT_START })
  axiosWithAuth()
    .post('/api/auth/register', newStylist)
    .then(res => {
      console.log ('resData:', res.data)
      localStorage.setItem('token', res.data.token)
      dispatch({ type: NEW_ACCOUNT_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: NEW_ACCOUNT_FAILURE, payload: err })
    })
}


// //NewPostForm actions & actionCreator
// //post request
// ADD_POST_START
// ADD_POST_SUCCESS
// ADD_POST_FAILURE