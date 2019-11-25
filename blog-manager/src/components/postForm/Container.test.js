import React from 'react'

// Constants, helper
import { Posts, Comments } from '../../constants/Posts'
import { withProvider } from '../../helpers/Utilities'

// Components
import PostFormContainer from './Container'
import PostForm from './index'

// Queries, Mutation
import { QUERY_POST } from '../../graphql/post/Queries'
import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../../graphql/post/Mutation'

jest.mock('../common/static-image', () => () => <></>)
jest.mock('../comment/index.js', () => () => <></>)

// Graphql queries
describe('Unit test for Post Form Container', () => {
  const mocks = [
    {
      request: {
        query: QUERY_POST,
        variables: {
          id: 1,
        },
      },
      result: {
        data: {
          Post: Posts[0],
        },
      },
    },
    {
      request: {
        query: CREATE_POST,
        variables: {
          id: 1,
          title: 'This is new post',
          text: 'This is description post',
          userId: 1,
          commentsIds: [1],
          comments: Comments,
        },
      },
      result: {
        data: {
          createPost: {
            id: 1,
            title: 'This is new post',
            text: 'This is description post',
            userId: 1,
            commentsIds: [1],
            comments: Comments,
          },
          error: {},
        },
      },
    },
    {
      request: {
        query: UPDATE_POST,
        variables: {
          id: 1,
          title: 'Updated Post',
          text: 'Updated Post',
          userId: 1,
          commentsIds: [1],
          comments: Comments,
        },
      },
      result: {
        data: {
          updatePost: {
            id: 1,
            title: 'Updated Post',
            text: 'Updated Post',
            userId: 1,
            commentsIds: [1],
            comments: Comments,
          },
          error: {},
        },
      },
    },
    {
      request: {
        query: DELETE_POST,
        variables: {
          id: 1,
        },
        options: jest.fn(),
      },
      result: {
        data: {
          deletePost: {
            id: null,
          },
        },
      },
    },
  ]

  describe('Unit test for Post Form container', () => {
    withProvider(PostFormContainer, mocks, {
      comments: Comments,
      post: Posts[0],
      user: { id: 1, name: 'Huyen Ta' },
    })

    const mockProps = {
      post: Posts[0],
      user: {
        id: 1,
        name: 'Huyen Ta',
      },
      comments: Comments,
      getPostDetail: jest.fn(),
      createPostSuccess: jest.fn(),
      updatePostSuccess: jest.fn(),
      onError: jest.fn(),
    }

    const component = withProvider(PostFormContainer, mocks, {
      ...mockProps,
    })

    it('- should match snapshot', () => {
      component.update()
      expect(component).toMatchSnapshot()
    })

    it('- should render create post', () => {
      component
        .find(PostForm)
        .props()
        .createPost({
          id: 1,
          title: 'This is new post',
          text: 'This is description post',
          userId: 1,
          commentsIds: [1],
          comments: Comments,
        })
    })

    it('- should render update post', () => {
      component
        .find(PostForm)
        .props()
        .updatePost({
          id: 1,
          title: 'Updated Post',
          text: 'Updated Post',
          userId: 1,
          commentsIds: [1],
          comments: Comments,
        })
    })

    it('- should render delete post', () => {
      component
        .find(PostForm)
        .props()
        .deletePost(1)
    })
  })
})
