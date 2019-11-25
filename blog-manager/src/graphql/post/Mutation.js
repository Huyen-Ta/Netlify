import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost(
    $text: String!
    $title: String!
    $userId: ID
    $commentsIds: [ID!]
    $comments: [PostcommentsComment!]
  ) {
    createPost(
      text: $text
      title: $title
      userId: $userId
      commentsIds: $commentsIds
      comments: $comments
    ) {
      id
      title
      text
      comments {
        id
        text
      }
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost(
    $id: ID!
    $text: String
    $title: String
    $userId: ID
    $commentsIds: [ID!]
    $comments: [PostcommentsComment!]
  ) {
    updatePost(
      id: $id
      text: $text
      title: $title
      userId: $userId
      commentsIds: $commentsIds
      comments: $comments
    ) {
      id
      title
      text
      comments {
        id
        text
      }
    }
  }
`

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`
