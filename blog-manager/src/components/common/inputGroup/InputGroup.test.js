import React from 'react'

// Import component InputGroup
import InputGroup from './index'

describe('InputGroup Component', () => {
  const props = {
    placeholder: 'Enter the email',
    name: 'email',
    isDisabled: false,
    onKeyDown: jest.fn(),
    inputRef: jest.fn(),
    onChange: jest.fn(),
    title: 'Title',
    error: {
      email: 'Required field',
    },
  }

  const component = shallow(<InputGroup {...props} />)

  it('- should render to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('- should render default props', () => {
    expect(InputGroup.defaultProps.onKeyDown()).toBeUndefined()
    expect(InputGroup.defaultProps.inputRef()).toBeUndefined()
    expect(InputGroup.defaultProps.onBlur()).toBeUndefined()
  })
})
