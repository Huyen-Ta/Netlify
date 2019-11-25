export const USER_TYPES = {
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_IN: 'SIGN_IN',
  RESET_TYPE: 'RESET_TYPE',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  SIGN_OUT: 'SIGN_OUT',
}

export const signIn = () => ({
  type: USER_TYPES.SIGN_IN,
})

export const signInSuccess = user => ({
  type: USER_TYPES.SIGN_IN_SUCCESS,
  user,
})

export const signInFailed = error => ({
  type: USER_TYPES.SIGN_IN_FAILED,
  error,
})

export const signOut = () => ({
  type: USER_TYPES.SIGN_OUT,
})

export const resetType = () => ({
  type: USER_TYPES.RESET_TYPE,
})

export const updateUserSuccess = data => ({
  data,
  type: USER_TYPES.UPDATE_USER_SUCCESS,
})
