import React from 'react'

// Components
import Popup from './index'

describe('Unit test for component Popup', () => {
  const props = {
    title: 'Are you sure delete this post ?',
    btnSubmit: 'Delete',
    btnCancel: 'Cancel',
  }

  const wrapper = shallow(<Popup {...props} />)

  it('- should render to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('- should render default props', () => {
    expect(Popup.defaultProps.title).toEqual('')
  })
})
