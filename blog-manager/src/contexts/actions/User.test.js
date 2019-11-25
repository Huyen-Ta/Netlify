// Actions
import {
  signIn,
  signInSuccess,
  signOut,
  resetType,
  updateUserSuccess,
  signInFailed,
  USER_TYPES,
} from './User'

const User = {
  id: 1,
  email: 'huyen@gmail.com',
  password: 'huyen123',
  createdAt: '2019-10-30T04:44:36.000Z',
  updatedAt: '2019-10-30T04:44:36.000Z',
  name: 'huyen',
  posts: {
    id: 1,
    text: 'Test',
    title: 'React',
    comments: {
      text: 'Hello',
      user: {
        id: 1,
      },
    },
  },
  comments: {
    text: 'Hi',
    id: 2,
  },
}

const error = {
  message: 'No user found with that information',
}

describe('Unit test for User Action', () => {
  it('- should return correct sign in', () => {
    expect(signIn()).toEqual({
      type: USER_TYPES.SIGN_IN,
    })
  })

  it('- should return correct value when sign in success', () => {
    expect(signInSuccess(User)).toEqual({
      type: USER_TYPES.SIGN_IN_SUCCESS,
      user: User,
    })
  })

  it('- should return correct value when sign in success', () => {
    expect(signInFailed(error)).toEqual({
      type: USER_TYPES.SIGN_IN_FAILED,
      error,
    })
  })

  it('- should return correct value when sign out', () => {
    expect(signOut()).toEqual({
      type: USER_TYPES.SIGN_OUT,
    })
  })

  it('- should return correct value when reset type', () => {
    expect(resetType()).toEqual({
      type: USER_TYPES.RESET_TYPE,
    })
  })

  it('- should return correct value when update user success', () => {
    expect(updateUserSuccess(User)).toEqual({
      type: USER_TYPES.UPDATE_USER_SUCCESS,
      data: User,
    })
  })
})
