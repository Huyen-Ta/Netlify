import gql from 'graphql-tag'

export const QUERY_POSTS = gql`
  query AllPosts($first: Int, $skip: Int) {
    allPosts(first: $first, skip: $skip) {
      id
      text
      title
      updatedAt
    }
  }
`

export const QUERY_POST = gql`
  query Post($id: ID) {
    Post(id: $id) {
      id
      text
      title
      comments {
        id
        text
        user {
          id
          name
        }
      }
      user {
        id
        name
      }
    }
  }
`
