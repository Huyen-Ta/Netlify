import React from 'react'

// Components
import Indicator from './index'

describe('Unit test for component Indicator', () => {
  it('- should render to match snapshot', () => {
    const wrapper = shallow(<Indicator />)
    expect(wrapper).toMatchSnapshot()
  })
})
