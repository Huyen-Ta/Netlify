import React from 'react'
import { render } from 'react-testing-library'

// Components
import StaticImage from './index'

describe('Unit test for component Static Image', () => {
  const props = {
    className: 'profile-user',
    name: 'avatar',
  }

  it('- should render to match snapshot', () => {
    const wrapper = render(<StaticImage {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
