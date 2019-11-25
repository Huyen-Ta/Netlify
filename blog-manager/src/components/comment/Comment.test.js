import React from 'react'
import { act } from 'react-testing-library'

// Config test hook
import TestHook from '../../configs/TestHook'

// Constants
import { Posts } from '../../constants/Posts'

// Components
import CommentWrapper, { Comment, internalHook } from './index'

describe('Unit test for component Comment', () => {
  const props = {
    handleKeyDown: jest.fn(),
    commentRef: jest.fn(),
    toggleModal: jest.fn(),
    handleDelete: jest.fn(),
    handleSave: jest.fn(),
    setCommentId: jest.fn(),
    createComment: jest.fn(),
    deleteComment: jest.fn(),
    updateComment: jest.fn(),
    comments: [
      {
        id: 2,
        text: 'Hi',
        user: {
          id: 5,
          name: 'Huyen',
        },
      },
    ],
    post: Posts[0],
    user: {
      id: 12,
      name: 'Huyen',
    },
    isToggleModal: true,
    isDelete: false,
    commentId: 1,
  }

  const wrapper = shallow(<Comment {...props} />)

  const data = TestHook(internalHook, { ...props })

  it('- should render to match snapshot', () => {
    const component = shallow(<CommentWrapper {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(component).toMatchSnapshot()
  })

  it('- should render handle toggle modal', () => {
    act(() => {
      data.toggleModal({
        target: {
          getAttribute: () => 'data-id',
        },
      })
    })

    expect(data.isToggleModal).toBe(true)
  })

  it('- should render handle key down', () => {
    act(() => {
      data.handleKeyDown({
        keyCode: '',
        target: {
          value: 'Hello',
        },
      })
    })

    act(() => {
      data.newCommentRef.current = { value: 'I like this post' }
      data.handleKeyDown({
        keyCode: 13,
      })

      expect(props.createComment).toBeCalled()
    })
  })

  it('- should render handle delete', () => {
    act(() => {
      data.handleDelete()
    })

    expect(props.deleteComment).toBeCalled()
  })

  it('- should render handle save', () => {
    act(() => {
      data.commentRef.current = { value: 'Hello' }
      data.handleSave()
    })

    expect(props.updateComment).toBeCalled()
  })

  it('- should render popup delete comment ', () => {
    wrapper.setProps({
      comments: [
        {
          id: 1,
          text: 'Hello',
          user: {
            id: 1,
            name: 'Huyen',
          },
        },
      ],
      isDelete: true,
    })

    expect(wrapper.find('Popup').props().btnSubmit).toEqual('Delete')
  })

  it('- should render popup edit comment ', () => {
    wrapper.setProps({
      comments: [
        {
          id: 1,
          text: 'Hello',
          user: {
            id: 1,
            name: 'Huyen',
          },
        },
      ],
      isDelete: false,
      isToggleModal: true,
    })

    expect(
      wrapper
        .find('InputGroup')
        .at(0)
        .props().defaultValue
    ).toEqual('Hello')
  })
})
