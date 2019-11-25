import React from 'react'
import { act } from 'react-testing-library'

// Config test hook
import TestHook from '../../configs/TestHook'

// Components
import SignInWrapper, { SignIn, internalHook } from './index'

describe('Unit test for component Sign In', () => {
  const props = {
    handleSignIn: jest.fn(),
    onSignIn: jest.fn(),
    change: {
      email: 'huyen@gmail.com',
    },
    user: {
      email: 'huyen@gmail.com',
      password: 123,
    },
    errServer: {
      message: 'Graphql Error: User no found information',
    },
    type: 'SIGN_IN_SUCCESS',
  }

  const wrapper = shallow(<SignIn {...props} />)
  const data = TestHook(internalHook, { ...props })

  it('- should render to match snapshot', () => {
    const component = shallow(<SignInWrapper {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(component).toMatchSnapshot()
  })

  it('- should render handle save when have value', () => {
    act(() => {
      data.emailRef.current = { value: 'huyen@gmail.com' }
      data.passwordRef.current = { value: 123 }

      data.handleSignIn({
        preventDefault: jest.fn(),
      })
    })

    expect(data.internalErr).toEqual({})
  })

  it('- should render handle save when value null', () => {
    act(() => {
      data.emailRef.current = { value: '' }
      data.passwordRef.current = { value: '' }
      data.handleSignIn({
        preventDefault: jest.fn(),
      })
    })

    expect(data.internalErr.email).toEqual('Required field')
    expect(data.internalErr.password).toEqual('Required field')
  })

  it('- should render component Button', () => {
    wrapper.setProps({
      error: {},
      user: {},
    })
    expect(wrapper.find('Button').length).toBe(1)
  })
})
