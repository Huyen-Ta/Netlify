// @flow
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './src/configs/Apollo'
import MainProvider from './src/contexts/providers/Main'
import UserProvider from './src/contexts/providers/User'

type Props = {|
  element: React.Node
|}

export const wrapRootElement = ({ element }: Props) => (
  <ApolloProvider client={client}>
    <UserProvider>
      <MainProvider>{element}</MainProvider>
    </UserProvider>
  </ApolloProvider>
)
