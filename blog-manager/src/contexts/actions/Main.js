export const MAIN_TYPES = {
  // POSTS
  GET_LIST_POSTS: 'GET_LIST_POSTS',
  GET_POST_DETAIL: 'GET_POST_DETAIL',
  CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',

  // COMMENTS
  CREATE_COMMENT_SUCCESS: 'CREATE_COMMENT_SUCCESS',
  CREATE_COMMENT_REQUEST: 'CREATE_COMMENT_REQUEST',
  UPDATE_COMMENT_SUCCESS: 'UPDATE_COMMENT_SUCCESS',
  UPDATE_COMMENT_REQUEST: 'UPDATE_COMMENT_REQUEST',
  DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
  DELETE_COMMENT_REQUEST: 'DELETE_COMMENT_REQUEST',

  // RESET DATA
  RESET_POST: 'RESET_POST',
}

// POSTS
export const resetPost = () => ({
  type: MAIN_TYPES.RESET_POST,
})

export const getListPosts = data => ({
  posts: data,
  type: MAIN_TYPES.GET_LIST_POSTS,
})

export const getPostDetail = data => ({
  data,
  type: MAIN_TYPES.GET_POST_DETAIL,
})

export const createPostSuccess = data => ({
  data,
  type: MAIN_TYPES.CREATE_POST_SUCCESS,
})

export const updatePostSuccess = data => ({
  data,
  type: MAIN_TYPES.UPDATE_POST_SUCCESS,
})

// COMMENTS
export const createCommentSuccess = data => ({
  data,
  type: MAIN_TYPES.CREATE_COMMENT_SUCCESS,
})

export const createCommentRequest = () => ({
  type: MAIN_TYPES.CREATE_COMMENT_REQUEST,
})

export const updateCommentSuccess = data => ({
  data,
  type: MAIN_TYPES.UPDATE_COMMENT_SUCCESS,
})

export const updateCommentRequest = () => ({
  type: MAIN_TYPES.UPDATE_COMMENT_REQUEST,
})

export const deleteCommentSuccess = data => ({
  data,
  type: MAIN_TYPES.DELETE_COMMENT_SUCCESS,
})

export const deleteCommentRequest = () => ({
  type: MAIN_TYPES.DELETE_COMMENT_REQUEST,
})
