import React from 'react'

// Components
import Button from './index'

describe('Unit test for component Button', () => {
  const props = {
    className: '',
    text: '',
    isDisabled: false,
    onClick: jest.fn(),
  }

  const wrapper = shallow(<Button {...props} />)

  it('- should render to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('- should render default props', () => {
    expect(Button.defaultProps.text).toEqual('')
    expect(Button.defaultProps.className).toEqual('')
    expect(Button.defaultProps.onClick()).toBeUndefined()
    expect(Button.defaultProps.isDisabled).toBeFalsy()
  })

  it('- should render className', () => {
    wrapper.setProps({
      className: 'btn-cancel',
    })

    expect(wrapper.props().className).toEqual('btn btn-cancel ')
  })

  it('- should render className when disabled is true', () => {
    wrapper.setProps({
      isDisabled: true,
    })

    expect(wrapper.props().className).toEqual('btn btn-cancel btn-disabled')
  })

  it('- should render onclick button', () => {
    wrapper.simulate('click')

    expect(props.onClick).toBeCalled()
  })
})
