import gql from 'graphql-tag'

export const CREATE_COMMENT = gql`
  mutation createComment($text: String!, $postId: ID, $userId: ID) {
    createComment(text: $text, postId: $postId, userId: $userId) {
      id
      text
      user {
        id
        name
      }
    }
  }
`

export const UPDATE_COMMENT = gql`
  mutation updateComment($id: ID!, $text: String) {
    updateComment(id: $id, text: $text) {
      id
      text
      user {
        id
        name
      }
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`
