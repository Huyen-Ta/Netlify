// @flow
import React from 'react'
import { Helmet } from 'react-helmet'
import '../pages/index.scss'

// Component
import PostForm from '../components/postForm/Container'

// Constants
import IMAGES from '../constants/Images'

type Props = {|
  pageContext: Object,
|}

export default ({ pageContext: { data } }: Props) => (
  <>
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
      <title>Post detail</title>
    </Helmet>
    <PostForm post={data.node} user={data.node.user} />
  </>
)
