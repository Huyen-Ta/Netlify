import 'jsdom-global/register'
import UserReducer, { initialState } from './User'
import { USER_TYPES } from '../actions/User'

describe('Unit test for User reducer', () => {
  const mockUser = {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin123',
  }

  it('should render with correct initial state', () => {
    expect(UserReducer(undefined, {})).toEqual(initialState)
  })

  it('should return correct value when reset type', () => {
    expect(
      UserReducer(initialState, {
        type: USER_TYPES.RESET_TYPE,
      }).type
    ).toEqual('')
  })

  it('should return correct value when sign in', () => {
    expect(
      UserReducer(initialState, {
        type: USER_TYPES.SIGN_IN,
      }).user
    ).toEqual({})
  })

  it('should return correct value when sign in success', () => {
    expect(
      UserReducer(initialState, {
        mockUser,
        type: USER_TYPES.SIGN_IN_SUCCESS,
      }).type
    ).toEqual(USER_TYPES.SIGN_IN_SUCCESS)
  })

  it('should return correct value when sign in failed', () => {
    expect(
      UserReducer(initialState, {
        error: {
          message: 'No user found with that information',
        },
        type: USER_TYPES.SIGN_IN_FAILED,
      }).error.message
    ).toEqual('No user found with that information')
  })

  it('should return correct value when update User', () => {
    expect(
      UserReducer(initialState, {
        user: mockUser,
        type: USER_TYPES.UPDATE_USER_SUCCESS,
        isProcessing: false,
      }).isProcessing
    ).toBe(false)
  })

  it('should return correct value when sign out', () => {
    expect(
      UserReducer(initialState, {
        type: USER_TYPES.SIGN_OUT,
      }).user
    ).toEqual({})
  })
})
