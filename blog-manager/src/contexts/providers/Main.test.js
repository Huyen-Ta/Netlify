/* eslint react/prop-types: 'off' */

import 'jsdom-global/register'
import React, { useContext, useEffect, useState } from 'react'

import MainProvider, { MainContext } from './Main'
import { MAIN_TYPES } from '../actions/Main'

import { Posts } from '../../constants/Posts'

const getListPosts = {
  type: MAIN_TYPES.GET_LIST_POSTS,
  posts: Posts,
}

const TestComponent = ({ onGetListPosts }) => {
  const context = useContext(MainContext)
  const [{ posts }, dispatch] = context

  const [data, updateData] = useState(posts)

  const getListPosts = () => {
    dispatch(onGetListPosts)
  }

  // Didmount
  useEffect(() => {
    getListPosts()
    updateData(posts)
  }, [posts.list.length])

  return <div>{data.list.length}</div>
}

describe('Unit test for Main Provider', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <MainProvider>
        <TestComponent onGetListPosts={getListPosts} />
      </MainProvider>
    )
  })

  it('- should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
