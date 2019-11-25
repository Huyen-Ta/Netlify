// Actions
import {
  MAIN_TYPES,
  // Posts
  getListPosts,
  getPostDetail,
  createPostSuccess,
  updatePostSuccess,

  // Comments
  createCommentSuccess,
  updateCommentSuccess,
  deleteCommentSuccess,
  createCommentRequest,
  updateCommentRequest,
  deleteCommentRequest,

  // Reset data
  resetPost,
} from './Main'

// Data
import { Posts } from '../../constants/Posts'

const Comments = [
  {
    id: 1,
    text: 'Hello',
  },
  {
    id: 2,
    text: 'Hi',
  },
]

describe('Unit test for Main Action', () => {
  // Reset data
  it('should return correct reset post', () => {
    expect(resetPost()).toEqual({
      type: MAIN_TYPES.RESET_POST,
    })
  })

  // Posts
  it('should return correct value when get list posts', () => {
    expect(getListPosts(Posts)).toEqual({
      type: MAIN_TYPES.GET_LIST_POSTS,
      posts: Posts,
    })
  })

  it('should return correct value when get post detail', () => {
    expect(getPostDetail(Posts)).toEqual({
      data: Posts,
      type: MAIN_TYPES.GET_POST_DETAIL,
    })
  })

  it('should return correct value when create post success', () => {
    expect(createPostSuccess(Posts)).toEqual({
      type: MAIN_TYPES.CREATE_POST_SUCCESS,
      data: Posts,
    })
  })

  it('should return correct value when update post success', () => {
    expect(updatePostSuccess(Posts)).toEqual({
      type: MAIN_TYPES.UPDATE_POST_SUCCESS,
      data: Posts,
    })
  })

  // Comments
  it('should return correct value when create comment success', () => {
    expect(createCommentSuccess(Comments)).toEqual({
      type: MAIN_TYPES.CREATE_COMMENT_SUCCESS,
      data: Comments,
    })
  })

  it('should return correct value when create comment request', () => {
    expect(createCommentRequest()).toEqual({
      type: MAIN_TYPES.CREATE_COMMENT_REQUEST,
    })
  })

  it('should return correct value when update comment success', () => {
    expect(updateCommentSuccess(Comments)).toEqual({
      type: MAIN_TYPES.UPDATE_COMMENT_SUCCESS,
      data: Comments,
    })
  })

  it('should return correct value when update comment request', () => {
    expect(updateCommentRequest()).toEqual({
      type: MAIN_TYPES.UPDATE_COMMENT_REQUEST,
    })
  })

  it('should return correct value when delete comment success', () => {
    expect(deleteCommentSuccess(Comments)).toEqual({
      type: MAIN_TYPES.DELETE_COMMENT_SUCCESS,
      data: Comments,
    })
  })

  it('should return correct value when delete comment request', () => {
    expect(deleteCommentRequest()).toEqual({
      type: MAIN_TYPES.DELETE_COMMENT_REQUEST,
    })
  })
})
