import React from 'react'

// Constants, Helper
import { Posts, Comments } from '../../constants/Posts'
import { withProvider } from '../../helpers/Utilities'

// Components
import CommentContainer from './Container'
import Comment from './index'

// Graphql queries
import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from '../../graphql/comment/Mutation'

jest.mock('./index', () => () => <></>)

describe('Unit test for Comment Container', () => {
  const mocks = [
    {
      request: {
        query: CREATE_COMMENT,
        variables: {
          text: 'Hello',
          postId: 1,
          post: Posts[0],
          userId: 1,
        },
      },
      result: {
        data: {
          createComment: Comments[0],
          error: {},
        },
      },
    },
    {
      request: {
        query: UPDATE_COMMENT,
        variables: {
          id: 1,
          text: 'Hello',
          postId: 1,
          post: {
            id: 1,
            title: 'Program',
            userId: 1,
            commentsIds: 1,
            comments: {
              userId: 1,
              text: 'Test comment',
            },
          },
          userId: 1,
        },
      },
      result: {
        data: {
          updateComment: Comments[0],
          error: {},
        },
      },
    },
    {
      request: {
        query: DELETE_COMMENT,
        variables: {
          id: 1,
        },
        options: jest.fn(),
      },
      result: {
        data: {
          deleteComment: {
            id: null,
            name: null,
          },
        },
      },
    },
  ]

  describe('Unit test for Comment container', () => {
    withProvider(CommentContainer, mocks, {})

    const mockProps = {
      comments: [
        {
          id: 1,
          text: 'Hello',
        },
      ],

      createCommentSuccess: jest.fn(),
      updateCommentSuccess: jest.fn(),
      deleteCommentSuccess: jest.fn(),
      deleteCommentRequest: jest.fn(),
      createCommentRequest: jest.fn(),
      updateCommentRequest: jest.fn(),
      onError: jest.fn(),
    }

    const component = withProvider(CommentContainer, mocks, {
      ...mockProps,
    })

    it('- should match snapshot', () => {
      component.update()
      expect(component).toMatchSnapshot()
    })

    it('- should render create comment', () => {
      component
        .find(Comment)
        .at(0)
        .props()
        .createComment({
          text: 'Hello',
          postId: 1,
          post: {
            id: 1,
            title: 'Program',
          },
          userId: 1,
          id: 1,
        })
    })

    it('- should render update comment', () => {
      component
        .find(Comment)
        .at(0)
        .props()
        .updateComment({
          id: 1,
          text: 'Hello',
          postId: 1,
          post: {
            id: 1,
            title: 'Program',
          },
        })
    })

    it('- should render delete comment', () => {
      component
        .find(Comment)
        .at(0)
        .props()
        .deleteComment({
          id: 1,
        })
    })
  })
})
