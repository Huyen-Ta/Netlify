// @flow
import React, { memo, useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { navigate } from 'gatsby'

// Actions, context
import { MAIN_TYPES } from '../../contexts/actions/Main'

// Constant
import ROUTER from '../../constants/Router'

// Component
import InputGroup from '../common/inputGroup'
import Button from '../common/button'
import Popup from '../common/popup'
import Indicator from '../common/indicator'

import Header from '../header/Container'
import Comments from '../comment/Container'

type Props = {|
  post: Object,
  change: Object,
  user: Object,
  internalErr: Object,
  handleChange: () => void,
  handleSave: () => void,
  handleDelete: () => void,
  titleRef: () => void,
  descriptionRef: () => void,
  toggleModal: () => void,
  isToggleModal: Boolean,
  loading: Boolean,
|}

type PostFormProps = {|
  type: String,
  createPost: Function,
  updatePost: Function,
  deletePost: Function,
  post: Object,
  user: Object,
|}

export const internalHook = ({
  type,
  deletePost,
  createPost,
  updatePost,
  post,
  user,
}: PostFormProps) => {
  const [isToggleModal, updateModal] = useState(false)
  const [change, updateChange] = useState({})
  const [internalErr, updateInternalErr] = useState({})
  const titleRef = useRef('')
  const descriptionRef = useRef('')

  /*
   * When user create post success will redirect to home page
   */
  useEffect(() => {
    if (type === MAIN_TYPES.CREATE_POST_SUCCESS) {
      navigate(ROUTER.HOME)
    }
  }, [type])

  /*
   * Handle delete post
   */
  const handleDelete = () => {
    deletePost(post.id)
  }

  /*
   * Handle close, open modal when user click delete post
   */
  const toggleModal = () => {
    updateModal(!isToggleModal)
  }

  /*
   * Handle change value (text, title) post
   */
  const handleChange = event => {
    updateChange({
      ...change,
      [event.target.name]: event.target.value,
    })
  }

  /*
   * Handle save value (text, title) post when user edit, create post
   */
  const handleSave = () => {
    const validate = {
      title: !titleRef.current.value ? 'Required field' : '',
      text: !descriptionRef.current.value ? 'Required field' : '',
    }

    if (Object.values(validate).find(item => !!item)) {
      updateInternalErr({
        ...validate,
      })
      return
    }

    const newPost = {
      title: titleRef.current.value,
      text: descriptionRef.current.value,
      userId: user && user.id,
      commentsIds: [],
      comments: [],
    }

    if (_.isEmpty(post)) {
      // Create new post
      createPost(newPost)
    } else {
      // Edit post
      updatePost({
        id: post.id,
        title: titleRef.current.value,
        text: descriptionRef.current.value,
        userId: user && user.id,
        commentsIds: post.commentsIds,
        comments: post.comments.map(item => ({
          text: item.text,
          userId: user && user.id,
        })),
      })
    }
  }
  return {
    internalErr,
    handleDelete,
    toggleModal,
    handleChange,
    handleSave,
    isToggleModal,
    descriptionRef,
    titleRef,
    change,
    post,
  }
}

// Component Post Form
export const PostForm = ({
  post,
  change,
  handleChange,
  handleSave,
  handleDelete,
  internalErr,
  titleRef,
  descriptionRef,
  toggleModal,
  isToggleModal,
  user,
  loading,
}: Props) => {
  const isDisabled = Object.keys(change).length === 0
  const isCheckPost = post.user && post.user.id !== user.id

  return (
    <>
      <Header user={user} />
      {loading && <Indicator />}
      <div className='post-detail__wrapper'>
        <h3 className='post-detail__title'>Post</h3>
        <img
          className='post-detail__image'
          src={post.image.file.url}
          alt='post'
          height='42'
          width='42'
        />
        <InputGroup
          placeholder='Enter the title'
          inputRef={titleRef}
          onBlur={handleChange}
          defaultValue={post ? post.title : ''}
          name='title'
          title='Title'
          error={internalErr}
          isDisabled={isCheckPost}
        />
        <InputGroup
          placeholder='Enter the description'
          inputRef={descriptionRef}
          onBlur={handleChange}
          defaultValue={post ? post.text : ''}
          name='text'
          title='Description'
          error={internalErr}
          typeInput='textarea'
          isDisabled={isCheckPost}
        />
        {post.id && <Comments user={user} post={post} />}
        {!isCheckPost && (
          <div className='post-detail__btn-group'>
            {!_.isEmpty(post) && (
              <Button
                className='btn btn-deep-orange'
                text='Delete'
                onClick={toggleModal}
              />
            )}
            <Button
              className='btn-submit btn-success'
              text='Save'
              onClick={handleSave}
              isDisabled={isDisabled}
            />
          </div>
        )}
        {isToggleModal && (
          <Popup
            title='Are you delete this post ?'
            toggleModal={toggleModal}
            onSubmit={handleDelete}
            btnSubmit='Delete'
            btnCancel='Cancel'
          />
        )}
      </div>
    </>
  )
}

PostForm.defaultProps = {
  post: {},
}

const PostFormWrapper = memo((props: Object) => (
  <PostForm {...internalHook(props)} {...props} />
))

export default PostFormWrapper
