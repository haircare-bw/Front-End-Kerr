import {
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from '../actions';

const initialState = {
  profiles: [],
  error: '',
  fetchingProfile: false,
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROFILE_START:
      return {
        ...state,
        error: '',
        fetchingProfile: true
      }
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
        error: '',
        fetchingProfile: false
      }
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingProfile: false
      }
    default:
      return state;
  }
}

// //post request
// ADD_POST_START
// ADD_POST_SUCCESS
// ADD_POST_FAILURE

////Stretch Goal: update & delete posts