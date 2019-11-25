import React from 'react'
import { act } from 'react-testing-library'

// Config test hook
import TestHook from '../../configs/TestHook'

// Constants
import { Posts } from '../../constants/Posts'

// Components
import PostFormWrapper, { PostForm, internalHook } from './index'

describe('Unit test for component Post Form', () => {
  const props = {
    post: Posts[0],
    change: {
      title: 'Posts',
    },
    handleChange: jest.fn(),
    handleSave: jest.fn(),
    handleDelete: jest.fn(),
    titleRef: jest.fn(),
    descriptionRef: jest.fn(),
    toggleModal: jest.fn(),
    createPost: jest.fn(),
    updatePost: jest.fn(),
    deletePost: jest.fn(),
    internalErr: {
      title: '',
      text: 'Required field',
    },
    isToggleModal: true,
    type: 'CREATE_POST_SUCCESS',
  }

  const wrapper = shallow(<PostForm {...props} />)
  const data = TestHook(internalHook, { ...props })

  it('- should render to match snapshot', () => {
    const component = shallow(<PostFormWrapper {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(component).toMatchSnapshot()
  })

  it('- should render handle delete', () => {
    act(() => {
      data.handleDelete()
    })

    expect(props.deletePost).toBeCalled()
  })

  it('- should render handle toggle modal', () => {
    act(() => {
      data.toggleModal()
    })

    expect(data.isToggleModal).toBe(true)
  })

  it('- should render handle change', () => {
    act(() => {
      data.handleChange({
        target: {
          name: 'title',
          value: 'Posts',
        },
      })
    })

    expect(data.change.title).toEqual('Posts')
  })

  it('- should render handle save when value null', () => {
    act(() => {
      data.titleRef.current = { value: '' }
      data.descriptionRef.current = { value: '' }
      data.handleSave()
    })

    expect(data.internalErr.title).toEqual('Required field')
    expect(data.internalErr.text).toEqual('Required field')
  })

  it('- should render handle save when update post', () => {
    act(() => {
      data.titleRef.current = { value: 'News' }
      data.descriptionRef.current = { value: 'Description' }
      data.handleSave()
    })

    expect(props.updatePost).toBeCalled()
  })
})
