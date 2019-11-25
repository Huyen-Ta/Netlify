// @flow
import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'

// Component
import Button from '../button'

type Props = {|
  handlePrevPage: () => void,
  handleNextPage: () => void,
  currentPage: Number,
|}

export const internalHook = () => {
  const [currentPage, updateCurrentPage] = useState(1)

  useEffect(() => {
    navigate(`/?=${currentPage}`)
  }, [currentPage])

  /*
   * Handle previous page
   */
  const handlePrevPage = () => {
    updateCurrentPage(currentPage - 1)
  }

  /*
   * Handle next page
   */
  const handleNextPage = () => {
    updateCurrentPage(currentPage + 1)
  }

  return {
    handlePrevPage,
    handleNextPage,
    currentPage,
  }
}

// Component Pagination
export const Pagination = ({
  handlePrevPage,
  handleNextPage,
  currentPage,
}: Props) => (
  <div className='pagination'>
    <Button
      onClick={handlePrevPage}
      className='btn-submit'
      text='Previous Page'
      isDisabled={currentPage === 1}
    />
    <Button onClick={handleNextPage} className='btn-submit' text='Next Page' />
  </div>
)

Pagination.defaultProps = {
  handlePrevPage: () => {},
  handleNextPage: () => {},
  currentPage: 1,
}

const PaginationWrapper = props => (
  <Pagination {...internalHook(props)} {...props} />
)

export default PaginationWrapper
