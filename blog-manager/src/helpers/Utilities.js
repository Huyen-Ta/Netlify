import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'

import UserProvider from '../contexts/providers/User'
import MainProvider from '../contexts/providers/Main'

// Get id item
export const getId = text => text && text.split('=')[1]

// Test container
export const withProvider = (WrappedComponent, mocks, props) => mount(
  <UserProvider>
    <MainProvider>
      <MockedProvider mocks={mocks} addTypename={false}>
        <WrappedComponent {...props} />
      </MockedProvider>
    </MainProvider>
  </UserProvider>
)
