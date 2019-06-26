import {
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE
} from '../actions';

const initialState = {
  profiles: [],
  error: '',
  fetchingProfile: false,
  addingPost: false,
  updatingProfile: false,
  deletingPost: false
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
      case ADD_POST_START:
        return {
          ...state,
          error: '',
          addingPost: true
      }
      case ADD_POST_SUCCESS:
        return{
          ...state,
          error: '',
          addingPost: false,
          profiles: action.payload
        }
      case ADD_POST_FAILURE:
        return{
          ...state,
          error: action.payload,
          addingPost: false
        }
      case UPDATE_PROFILE_START:
        return {
          ...state,
          error: '',
          updatingProfile: true
      }
      case UPDATE_PROFILE_SUCCESS:
        return{
          ...state,
          error: '',
          updatingProfile: false,
          profiles: action.payload
        }
      case UPDATE_PROFILE_FAILURE:
        return{
          ...state,
          error: action.payload,
          updatingProfile: false
        }
        case DELETE_POST_START:
          return {
            ...state,
            error: '',
            deletingPost: true
        }
        case DELETE_POST_SUCCESS:
          return{
            ...state,
            error: '',
            deletingPost: false,
            profiles: action.payload
          }
        case DELETE_POST_FAILURE:
          return{
            ...state,
            error: action.payload,
            deletingPost: false
          }
    default:
      return state;
  }
}


////update & delete posts CRUD MAAANNNN