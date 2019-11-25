// @flow
import React, { memo, useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

// Components
import Header from '../components/header/Container'
import Layout from '../components/layout'
import NotFoundPage from './not-found-page'
import StaticImage from '../components/common/static-image'
import Pagination from '../components/common/pagination'

// Constants
import IMAGES from '../constants/Images'

// Action
import { MAIN_TYPES } from '../contexts/actions/Main'

type Props = {|
  defaultData: Array<{
    id: String,
    title: String,
    text: String,
  }>,
  keywordRef: () => void,
  handleSearch: () => void,
  user: Object,
|}

type PostProps = {|
  posts: Object,
  resetPost: Function,
  type: String,
|}

export const internalHook = ({ data, resetPost, type }: PostProps) => {
  const posts = data.allContentfulPost.edges
  const [defaultData, updateData] = useState(posts)

  const keywordRef = useRef('')

  /*
   * Update DefaultData when init app(posts is null)
   */
  useEffect(() => {
    if (!_.isEqual(defaultData, posts)) {
      updateData(posts)
    }
  }, [posts])

  useEffect(() => {
    if (type === MAIN_TYPES.GET_POST_DETAIL) {
      resetPost()
    }
  }, [type])

  const handleSearch = () => {
    updateData(
      posts.filter(
        item => item.title
          .toString()
          .toLowerCase()
          .indexOf(keywordRef.current.value.toLowerCase()) > -1
      )
    )
  }

  return {
    handleSearch,
    keywordRef,
    defaultData,
  }
}

// Render component Post Item
export const renderPostItem = post => (
  <Link to={`/${post.slug}`} className='post__detail' key={post.id}>
    <StaticImage name='post' className='post-image' />
    <h3 className='post__title'>{post.title}</h3>
    <p className='post__description'>{post.text}</p>
  </Link>
)

// Component post
export const Posts = ({ keywordRef, handleSearch, defaultData }: Props) => (
  <>
    <Header handleSearch={handleSearch} keywordRef={keywordRef} />
    <Helmet
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: IMAGES.avatar,
        },
      ]}
    >
      <title>Posts</title>
    </Helmet>
    <Layout>
      <div className='post__row'>
        <p className='search-result'>{`Result search: ${defaultData.length}`}</p>
        {!_.isEmpty(defaultData.user) && (
          <Link to='/add_new' className='post__add-new'>
            Add New Post
          </Link>
        )}
      </div>
      <div className='post__group'>
        {defaultData.map(({ node: post }) => renderPostItem(post))}
      </div>
      {defaultData.length === 0 && <NotFoundPage />}
      {defaultData.length > 0 && <Pagination />}
    </Layout>
  </>
)

Posts.defaultProps = {
  defaultData: [],
}

const PostsWrapper = memo((props: Object) => (
  <Posts {...internalHook(props)} {...props} />
))

export default PostsWrapper

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulPost {
      edges {
        node {
          id
          title
          text
          comments {
            id
            text
            user {
              id
              name
            }
          }
          user {
            id
            name
          }
          slug
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
