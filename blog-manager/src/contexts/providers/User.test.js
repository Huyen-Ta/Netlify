import 'jsdom-global/register'
import React, { useContext, useEffect, createContext, useReducer } from 'react'

import UserProvider, { UserContext } from './User'
import { USER_TYPES } from '../actions/User'
import userReducer, { initialState } from '../reducers/User'

const signInSuccess = {
  type: USER_TYPES.SIGN_IN_SUCCESS,
  user: {
    name: 'Huyen',
    email: 'huyen@mail.com',
  },
}

/* eslint react/prop-types: 'off' */
const TestComponent = ({ onSignInSuccess }) => {
  const context = useContext(UserContext)
  const [{ user }, dispatch] = context

  const signInSuccess = () => {
    dispatch(onSignInSuccess)
  }

  // Didmount
  useEffect(() => {
    signInSuccess()
  }, [])

  return <div>{user.name}</div>
}

describe('Unit test for User Provider', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <UserProvider>
        <TestComponent onSignInSuccess={signInSuccess} />
      </UserProvider>
    )
  })

  it('- should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('- should call default key', () => {
    const UserContext = createContext()
    const UserProvider = ({ children }) => {
      const value = useReducer(userReducer, initialState)

      return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
      )
    }

    const container = mount(
      <UserProvider>
        <div />
      </UserProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
