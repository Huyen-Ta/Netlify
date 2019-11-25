import React from 'react'
import { render } from 'react-testing-library'

// Components
import SEO from './index'

describe('Unit test for component SEO', () => {
  const props = {
    title: 'Post',
    author: 'Huyen Ta',
  }

  it('- should render to match snapshot', () => {
    const wrapper = render(<SEO {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
