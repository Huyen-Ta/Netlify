import React from 'react'
import { act } from 'react-testing-library'

// Config test hook
import TestHook from '../../configs/TestHook'

// Constants
import { Posts } from '../../constants/Posts'
import ROUTER from '../../constants/Router'

// Components
import HeaderWrapper, {
  Header,
  internalHook,
  renderSearchFilter,
} from './index'

describe('Unit test for component Header', () => {
  const props = {
    isToggleModal: true,
    keywordRef: jest.fn(),
    handleKeyDown: jest.fn(),
    handleSearch: jest.fn(),
    onSignOut: jest.fn(),
    updateUser: jest.fn(),
    user: {
      id: 1,
      name: 'Huyen',
      comments: [
        {
          id: 1,
          text: 'Hello',
          post: [Posts[0]],
          user: {
            id: 4,
          },
        },
        {
          id: 2,
          text: 'Hi',
          user: {
            id: 5,
          },
        },
      ],
      posts: Posts,
    },
  }

  delete global.window.location
  global.window.location = { pathname: ROUTER.HOME }

  const wrapper = shallow(<Header {...props} />)
  const data = TestHook(internalHook, { ...props })

  it('- should render to match snapshot', () => {
    const component = shallow(<HeaderWrapper {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(component).toMatchSnapshot()
  })

  it('- should render component search filter', () => {
    expect(
      renderSearchFilter({
        keywordRef: jest.fn(),
        handleSearch: jest.fn(),
      }).props.className
    ).toEqual('search-filter')
  })

  it('- should render handle toggled modal', () => {
    act(() => {
      data.toggleModal()
    })

    expect(data.isToggleModal).toBe(true)
  })

  it('- should render handle toggled dropdown', () => {
    act(() => {
      data.toggleDropdown()
    })

    expect(data.isToggleDropdown).toBe(true)
  })

  it('- should render handle save when error', () => {
    act(() => {
      data.inputRef.current = { value: '' }
      data.handleSave()
    })

    expect(data.internalErr.userName).toEqual('Required field')
  })

  it('- should render handle save', () => {
    const mockProps = {
      ...props,
      user: {
        comments: [
          {
            text: 'Hello',
          },
        ],
        posts: [
          {
            comments: [
              {
                user: {
                  id: 1,
                },
              },
            ],
          },
        ],
      },
    }

    const hook = TestHook(internalHook, { ...mockProps })
    act(() => {
      hook.inputRef.current = { value: 'Huyen' }
      hook.handleSave()
    })

    expect(props.updateUser).toBeCalled()
  })

  it('- should render handle keydown', () => {
    wrapper
      .find('InputGroup')
      .at(0)
      .simulate('keyDown', { keyCode: 13 })
    expect(props.handleSearch).toBeCalled()
  })

  it('- should render handle keydown', () => {
    wrapper
      .find('InputGroup')
      .at(0)
      .simulate('keyDown', { keyCode: '' })
    expect(props.handleSearch).toBeCalled()
  })

  it('- should render handle sign out', () => {
    wrapper.setProps({
      isToggleDropdown: true,
    })
    wrapper.find('Button').simulate('click')
    expect(props.onSignOut).toBeCalled()
  })

  it('- should render handle sign in', () => {
    wrapper.setProps({
      user: {},
    })

    expect(wrapper.find('Button').props().text).toEqual('Sign In')
  })
})
