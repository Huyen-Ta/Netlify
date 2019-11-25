import client from './Apollo'

jest.mock('apollo-boost', () => {
  class ApolloClient {
    constructor({ uri }) {
      this.uri = uri
    }
  }
  return ApolloClient
})

describe('Unit test for Apollo configuration', () => {
  it('- should initialize successfully client', () => {
    expect(client.uri).toEqual(process.env.GATSBY_API_URL)
  })
})
