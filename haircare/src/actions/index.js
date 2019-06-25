import { axiosWithAuth } from '../utils/axiosWithAuth';

//loginPage actions & actionCreator
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch ({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/auth/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: LOGIN_SUCCESS })
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}

//newAccount actions & actionCreator
export const NEW_ACCOUNT_START = 'NEW_ACCOUNT_START';
export const NEW_ACCOUNT_SUCCESS = 'NEW_ACCOUNT_SUCCESS';
export const NEW_ACCOUNT_FAILURE = 'NEW_ACCOUNT_FAILURE'

export const newAccount = newStylist => dispatch => {
  dispatch ({ type: NEW_ACCOUNT_START })
  return axiosWithAuth()
    .post('/auth/register', newStylist)
    .then(res => {
      console.log ('resData:', res.data)
      localStorage.setItem('token', res.data.token)
      dispatch({ type: NEW_ACCOUNT_SUCCESS, payload: res.data })
      return true;
    })
    .catch(err => {
      dispatch({ type: NEW_ACCOUNT_FAILURE, payload: err })
    })
}


//stylists actions & actionCreators
export const FETCH_STYLIST_START = 'FETCH_STYLIST_START';
export const FETCH_STYLIST_SUCCESS = 'FETCH_STYLIST_SUCCESS';
export const FETCH_STYLIST_FAILURE = 'FETCH_STYLIST_FAILURE';

export const getStylists = () => dispatch => {
  dispatch({ type: FETCH_STYLIST_START })
  axiosWithAuth()
    .get('/stylists')
    .then(res => {
      console.log('stylists', res.data)
      dispatch({ type: FETCH_STYLIST_SUCCESS, payload: res.data })
    }).catch(err =>{
      dispatch({ type: FETCH_STYLIST_FAILURE, payload: err.response })
    })
}


export const FETCH_PROFILE_START = 'FETCH_PROFILE_START';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const getProfiles = () => dispatch => {
  dispatch({ type: FETCH_PROFILE_START })
  axiosWithAuth()
    .get('/profiles')
    .then(res => {
      console.log('profile', res.data)
      dispatch({ type: FETCH_PROFILE_SUCCESS, payload: res.data })
    }).catch(err =>{
      dispatch({ type: FETCH_PROFILE_FAILURE, payload: err.response })
    })
}

export const GET_STYLIST_BY_ID_START = 'GET_STYLIST_BY_ID_START';
export const GET_STYLIST_BY_ID_SUCCESS = 'GET_STYLIST_BY_ID_SUCCESS';
export const GET_STYLIST_BY_ID_FAILURE = 'GET_STYLIST_BY_ID_FAILURE';

export const getStylistId = id => dispatch => {
  dispatch({ type: GET_STYLIST_BY_ID_START })
  axiosWithAuth()
    .get(`/stylists/${id}`)
    .then(res => {
      dispatch({ type: GET_STYLIST_BY_ID_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_STYLIST_BY_ID_FAILURE, payload: err.response })
    })
}


// //NewPostForm actions & actionCreator
// //post request
// ADD_POST_START
// ADD_POST_SUCCESS
// ADD_POST_FAILURE