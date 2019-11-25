import gql from 'graphql-tag'

export const SIGN_IN = gql`
  mutation signinUser($email: AUTH_PROVIDER_EMAIL) {
    signinUser(email: $email) {
      user {
        id
        email
        password
        name
        posts {
          id
          text
          title
          comments {
            text
            user {
              id
            }
          }
        }
        comments {
          text
          id
        }
      }
    }
  }
`

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String) {
    updateUser(id: $id, name: $name) {
      id
      email
      password
      createdAt
      updatedAt
      name
      posts {
        id
        text
        title
        comments {
          text
          user {
            id
          }
        }
      }
      comments {
        text
        id
      }
    }
  }
`

// export const UPDATE_USER = gql`
//   mutation updateUser(
//     $id: ID!
//     $name: String
//     $commentsIds: [ID!]
//     $comments: [UsercommentsComment!]
//     $postsIds: [ID!]
//     $posts: [UserpostsPost!]
//   ) {
//     updateUser(
//       id: $id
//       name: $name
//       commentsIds: $commentsIds
//       comments: $comments
//       postsIds: $postsIds
//       posts: $posts
//     ) {
//       id
//       email
//       password
//       createdAt
//       updatedAt
//       name
//       posts {
//         id
//         text
//         title
//         comments {
//           text
//           user {
//             id
//           }
//         }
//       }
//       comments {
//         text
//         id
//       }
//     }
//   }
// `
