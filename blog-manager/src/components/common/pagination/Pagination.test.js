import React from 'react'
import { act } from 'react-testing-library'

// Import component Pagination
import PaginationWrapper, { Pagination, internalHook } from './index'

// Config testHook
import TestHook from '../../../configs/TestHook'

describe('Pagination Component', () => {
  const props = {
    handlePrevPage: jest.fn(),
    handleNextPage: jest.fn(),
  }

  const wrapper = shallow(<Pagination {...props} />)

  const hook = TestHook(internalHook, props)

  it('- should match snapshot', () => {
    const component = shallow(<PaginationWrapper {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(component).toMatchSnapshot()
  })

  it('- should render default props', () => {
    expect(Pagination.defaultProps.handlePrevPage()).toBeUndefined()
    expect(Pagination.defaultProps.handleNextPage()).toBeUndefined()
    expect(Pagination.defaultProps.currentPage).toBe(1)
  })

  it('- should call navigate to previous page', () => {
    act(() => {
      hook.handlePrevPage()
    })

    expect(hook.currentPage).toBe(0)
  })

  it('- should call navigate to next page', () => {
    act(() => {
      hook.handleNextPage()
    })

    expect(hook.currentPage).toBe(1)
  })
})
