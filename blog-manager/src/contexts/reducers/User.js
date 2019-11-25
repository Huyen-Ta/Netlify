import { navigate } from 'gatsby'
import { USER_TYPES } from '../actions/User'
import ROUTER from '../../constants/Router'

export const initialState = {
  user: {},
  type: '',
  isProcessing: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES.RESET_TYPE:
      return {
        ...state,
        type: '',
      }

    case USER_TYPES.SIGN_IN:
      return {
        ...state,
        type: action.type,
        isProcessing: true,
      }

    case USER_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.user,
        type: action.type,
      }

    case USER_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: action.error,
        type: action.type,
        isProcessing: false,
      }

    case USER_TYPES.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        type: action.type,
        isProcessing: false,
      }

    case USER_TYPES.SIGN_OUT:
      navigate(ROUTER.SIGN_IN)
      localStorage.removeItem('user')
      return {
        ...state,
        user: {},
        type: action.type,
        isProcessing: false,
      }

    default:
      return state
  }
}

export default userReducer
