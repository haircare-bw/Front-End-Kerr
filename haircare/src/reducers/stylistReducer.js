// //get request
import {
  FETCH_STYLIST_START,
  FETCH_STYLIST_SUCCESS,
  FETCH_STYLIST_FAILURE
} from '../actions';

const initialState = {
  stylists: [],
  error: '',
  fetchingStylists: false,
}

export const stylistReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_STYLIST_START:
      return {
        ...state,
        error: '',
        fetchingStylists: true
      }
    case FETCH_STYLIST_SUCCESS:
      return {
        ...state,
        stylists: action.payload,
        error: '',
        fetchingStylists: false
      }
    case FETCH_STYLIST_FAILURE:
      return {
        error: action.payload,
        fetchingStylists: false
      }
    default:
      return state;
  }
}

// //post request
// ADD_POST_START
// ADD_POST_SUCCESS
// ADD_POST_FAILURE



// //Stretch Goal: update & delete posts