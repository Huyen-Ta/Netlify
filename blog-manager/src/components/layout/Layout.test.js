import React from 'react'

// Import component Layout
import Layout from './index'

describe('Layout Component', () => {
  const component = shallow(<Layout />)

  it('- should render to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
