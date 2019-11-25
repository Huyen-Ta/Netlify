import React from 'react'

// Components
import HeaderContainer from './Container'

// Helper
import { withProvider } from '../../helpers/Utilities'

// Graphql query
import { UPDATE_USER } from '../../graphql/user/Mutation'

import Header from './index'

jest.mock('../common/static-image', () => () => <></>)

jest.mock('../../contexts/helpers/Connect', () => ({
  connects: (contexts, mapStateToProps, mapDispatchToProps) => {
    const stateProps = mapStateToProps([
      {
        user: {
          user: {
            id: 1,
            name: 'Huyen',
            email: 'huyen@gmail.com',
            password: 'huyen123',
          },
        },
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

describe('Unit test for Header Container', () => {
  const mocks = [
    {
      request: {
        query: UPDATE_USER,
        variables: {
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
        },
      },
      result: {
        data: {
          updateUser: {
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
          },
        },
      },
    },
  ]

  describe('Unit test for Header container', () => {
    withProvider(HeaderContainer, mocks, {
      user: { name: 'Huyen Ta' },
      name: 'avatar',
    })

    const mockProps = {
      name: 'avatar',
      updateUserSuccess: jest.fn(),
      onError: jest.fn(),
    }

    const component = withProvider(HeaderContainer, mocks, {
      ...mockProps,
    })

    it('- should match snapshot', () => {
      component.update()
      expect(component).toMatchSnapshot()
    })

    it('- should render update user', () => {
      component
        .find(Header)
        .props()
        .updateUser({
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
        })
    })
  })
})
