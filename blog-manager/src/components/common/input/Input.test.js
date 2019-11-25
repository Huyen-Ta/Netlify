import React from 'react'

// Import component Input
import Input from './index'

describe('Input Component', () => {
  const props = {
    placeholder: 'Enter the email',
    name: 'email',
    isDisabled: false,
    onKeyDown: jest.fn(),
    inputRef: jest.fn(),
    onBlur: jest.fn(),
    title: 'Title',
  }

  const component = shallow(<Input {...props} />)

  it('- should render to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('- should render default props', () => {
    expect(Input.defaultProps.onKeyDown()).toBeUndefined()
    expect(Input.defaultProps.inputRef()).toBeUndefined()
    expect(Input.defaultProps.onBlur()).toBeUndefined()
  })

  it('- should render textarea when have error', () => {
    component.setProps({
      typeInput: 'textarea',
      error: {
        email: 'Required Field',
      },
    })

    expect(component.find('textarea').props().className).toEqual(
      'form__textarea form__textarea--error'
    )
  })

  it('- should render textarea when error null', () => {
    component.setProps({
      className: 'form__textarea',
      error: {},
    })

    expect(component.find('textarea').props().className).toEqual(
      'form__textarea '
    )
  })

  it('- should render textbox when have className', () => {
    component.setProps({
      typeInput: '',
      className: 'form__textbox',
      error: {
        email: 'Required Field',
      },
    })

    expect(component.find('input').props().className).toEqual(
      'form__textbox form__textbox--error'
    )
  })
})
