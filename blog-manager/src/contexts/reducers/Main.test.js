import 'jsdom-global/register'
import MainReducer, { initialState } from './Main'
import { MAIN_TYPES } from '../actions/Main'
import { Posts, Comments } from '../../constants/Posts'

describe('Unit test for Main Reducer', () => {
  it('should render with correct initial state', () => {
    expect(MainReducer(undefined, {})).toEqual(initialState)
  })

  // RESET POST
  it('should return correct value when reset post ', () => {
    expect(
      MainReducer(initialState, {
        type: MAIN_TYPES.RESET_POST,
      }).posts.post
    ).toEqual({})
  })

  // POSTS
  it('should return correct value when get list posts', () => {
    expect(
      MainReducer(initialState, {
        type: MAIN_TYPES.GET_LIST_POSTS,
        posts: Posts,
      })
    ).toEqual({
      ...initialState,
      posts: {
        ...initialState.posts,
        list: Posts,
      },
      type: MAIN_TYPES.GET_LIST_POSTS,
    })
  })

  it('should return correct value when get post detail ', () => {
    expect(
      MainReducer(initialState, {
        data: Posts,
        type: MAIN_TYPES.GET_POST_DETAIL,
      }).type
    ).toEqual(MAIN_TYPES.GET_POST_DETAIL)
  })

  it('should return correct value when create post success ', () => {
    expect(
      MainReducer(initialState, {
        data: Posts,
        type: MAIN_TYPES.CREATE_POST_SUCCESS,
      }).type
    ).toEqual(MAIN_TYPES.CREATE_POST_SUCCESS)
  })

  it('should return correct value when update post success ', () => {
    expect(
      MainReducer(initialState, {
        data: Posts,
        type: MAIN_TYPES.UPDATE_POST_SUCCESS,
      }).type
    ).toEqual(MAIN_TYPES.UPDATE_POST_SUCCESS)
  })

  // COMMENTS
  it('should return correct value when create comment success ', () => {
    const comment = {
      id: 1,
      text: 'Hello',
    }
    expect(
      MainReducer(
        {
          posts: {
            post: {
              comments: Comments,
            },
          },
        },
        {
          data: comment,
          type: MAIN_TYPES.CREATE_COMMENT_SUCCESS,
        }
      ).type
    ).toEqual(MAIN_TYPES.CREATE_COMMENT_SUCCESS)
  })

  it('should return correct value when create comment request ', () => {
    expect(
      MainReducer(initialState, {
        type: MAIN_TYPES.CREATE_COMMENT_REQUEST,
      }).type
    ).toEqual(MAIN_TYPES.CREATE_COMMENT_REQUEST)
  })

  it('should return correct value when update comment success ', () => {
    const comment = {
      id: 1,
      text: 'Hello',
    }
    expect(
      MainReducer(
        {
          posts: {
            post: {
              comments: Comments,
            },
          },
        },
        {
          data: comment,
          type: MAIN_TYPES.UPDATE_COMMENT_SUCCESS,
        }
      ).type
    ).toEqual(MAIN_TYPES.UPDATE_COMMENT_SUCCESS)
  })

  it('should return correct value when update comment request ', () => {
    expect(
      MainReducer(initialState, {
        type: MAIN_TYPES.UPDATE_COMMENT_REQUEST,
      }).type
    ).toEqual(MAIN_TYPES.UPDATE_COMMENT_REQUEST)
  })

  it('should return correct value when delete comment success ', () => {
    const comment = {
      id: 1,
      text: 'Hello',
    }
    expect(
      MainReducer(
        {
          posts: {
            post: {
              comments: Comments,
            },
          },
        },
        {
          data: comment,
          type: MAIN_TYPES.DELETE_COMMENT_SUCCESS,
        }
      ).type
    ).toEqual(MAIN_TYPES.DELETE_COMMENT_SUCCESS)
  })

  it('should return correct value when delete comment request ', () => {
    expect(
      MainReducer(initialState, {
        type: MAIN_TYPES.DELETE_COMMENT_REQUEST,
      }).type
    ).toEqual(MAIN_TYPES.DELETE_COMMENT_REQUEST)
  })
})
