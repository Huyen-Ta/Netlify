import { MAIN_TYPES } from '../actions/Main'

export const initialState = {
  posts: {
    list: [],
    post: {},
  },
  isProcessing: false,
  type: '',
  error: {},
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_TYPES.GET_LIST_POSTS:
      const ListPost = action.posts.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      )

      return {
        ...state,
        posts: {
          ...state.posts,
          list: ListPost,
        },
        isProcessing: false,
        type: MAIN_TYPES.GET_LIST_POSTS,
      }

    case MAIN_TYPES.GET_POST_DETAIL:
      return {
        ...state,
        posts: {
          ...state.posts,
          post: {
            ...state.posts.post,
            ...action.data,
            isProcessing: false,
          },
        },
        type: MAIN_TYPES.GET_POST_DETAIL,
      }

    case MAIN_TYPES.CREATE_POST_SUCCESS:
      const posts = state.posts.list
      return {
        ...state,
        posts: {
          list: [...posts, posts.push(action.data)],
        },
        type: MAIN_TYPES.CREATE_POST_SUCCESS,
      }

    case MAIN_TYPES.UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: {
          post: action.response,
        },
        type: MAIN_TYPES.UPDATE_POST_SUCCESS,
      }

    case MAIN_TYPES.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        type: MAIN_TYPES.CREATE_COMMENT_SUCCESS,
      }

    case MAIN_TYPES.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        isProcessing: true,
        type: MAIN_TYPES.CREATE_COMMENT_REQUEST,
      }

    case MAIN_TYPES.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        type: MAIN_TYPES.UPDATE_COMMENT_SUCCESS,
      }

    case MAIN_TYPES.UPDATE_COMMENT_REQUEST:
      return {
        ...state,
        isProcessing: true,
        type: MAIN_TYPES.UPDATE_COMMENT_REQUEST,
      }

    case MAIN_TYPES.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        type: MAIN_TYPES.DELETE_COMMENT_SUCCESS,
      }

    case MAIN_TYPES.DELETE_COMMENT_REQUEST:
      return {
        ...state,
        isProcessing: true,
        type: MAIN_TYPES.DELETE_COMMENT_REQUEST,
      }

    case MAIN_TYPES.RESET_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          post: {},
        },
        type: MAIN_TYPES.RESET_POST,
      }

    default:
      return state
  }
}

export default mainReducer
