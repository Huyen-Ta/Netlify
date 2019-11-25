import React from 'react'

// Components
import SignInContainer from './Container'

// Helper
import { withProvider } from '../../helpers/Utilities'

// Graphql query
import { SIGN_IN } from '../../graphql/user/Mutation'

import SignIn from './index'

jest.mock('./index', () => () => <></>)

jest.mock('../../contexts/helpers/Connect', () => ({
  connects: (contexts, mapStateToProps, mapDispatchToProps) => {
    const stateProps = mapStateToProps([
      {
        type: 'SIGN_IN',
      },
    ])
    const dispatchsProps = mapDispatchToProps([() => {}, () => {}])

    return function createWrapper(WrapperComponent) {
      return function createConnect() {
        return <WrapperComponent {...stateProps} {...dispatchsProps} />
      }
    }
  },
}))

describe('Unit test for Sign In Container', () => {
  const mocks = [
    {
      request: {
        query: SIGN_IN,
        variables: {
          email: 'huyen@gmail.com',
          password: 'huyen123',
        },
      },
      result: {
        data: {
          signinUser: {
            token: 'eyJ0eXAiO',
            user: {
              id: 1,
              name: 'huyen',
              email: 'huyen@gmail.com',
              password: 'huyen123',
              posts: [],
              comments: [],
            },
          },
        },
      },
    },
  ]

  describe('Unit test for Sign In container', () => {
    withProvider(SignInContainer, mocks, {
      signIn: jest.fn(),
      signInSuccess: jest.fn(),
    })

    const mockProps = {
      signInSuccess: jest.fn(),
      signIn: jest.fn(),
      onError: jest.fn(),
    }

    const component = withProvider(SignInContainer, mocks, {
      ...mockProps,
    })

    it('- should match snapshot', () => {
      component.update()
      expect(component).toMatchSnapshot()
    })

    it('- should render sign in', () => {
      component
        .find(SignIn)
        .props()
        .onSignIn({
          email: 'huyen@gmail.com',
          password: 'huyen123',
        })
    })
  })
})
