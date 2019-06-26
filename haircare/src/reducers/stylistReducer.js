// //get request
import {
  FETCH_STYLIST_START,
  FETCH_STYLIST_SUCCESS,
  FETCH_STYLIST_FAILURE,
  GET_STYLIST_BY_ID_START,
  GET_STYLIST_BY_ID_SUCCESS,
  GET_STYLIST_BY_ID_FAILURE
} from '../actions';

const initialState = {
  stylists: [],
  error: '',
  fetchingStylists: false,
  stylistPerson: {}
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
    case GET_STYLIST_BY_ID_START:
      return {
        ...state,
        error: '',
        fetchingStylists: true
      }
    case GET_STYLIST_BY_ID_SUCCESS:
      return {
      ...state,
      error: '',
      stylistPerson: action.payload,
      fetchingStylists: false
      }
    case GET_STYLIST_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingStylists: true
      }
    default:
      return state;
  }
}

