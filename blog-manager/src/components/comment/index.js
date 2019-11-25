// @flow
import React, { memo, useState, useRef } from 'react'
import _ from 'lodash'

// Component
import InputGroup from '../common/inputGroup'
import StaticImage from '../common/static-image'
import Popup from '../common/popup'
import Indicator from '../common/indicator'
import Button from '../common/button'

type Props = {|
  handleKeyDown: () => void,
  toggleModal: () => void,
  handleDelete: () => void,
  handleSave: () => void,
  commentRef: () => void,
  newCommentRef: () => void,
  handleAddComment: () => void,
  user?: Object,
  comments: Array<{
    id: String,
    user: Object,
    text: String,
  }>,
  isToggleModal: Boolean,
  isDelete: Boolean,
  isProcessing: Boolean,
  commentId: String,
  internalErr: Object,
  post: Object,
|}

type CommentProps = {|
  post: Object,
  createComment: Function,
  updateComment: Function,
  deleteComment: Function,
  user: Object,
|}

export const internalHook = ({
  post,
  createComment,
  updateComment,
  deleteComment,
  user,
}: CommentProps) => {
  const [isToggleModal, updateModal] = useState(false)
  const [isDelete, updateDelete] = useState(false)
  const [internalErr, updateInternalErr] = useState({})
  const [commentId, setCommentId] = useState('')
  const commentRef = useRef('')
  const newCommentRef = useRef('')

  /*
   * Handle open, close modal when user toggle edit, delete comment
   */
  const toggleModal = event => {
    updateModal(!isToggleModal)
    setCommentId(event.target.getAttribute('data-id'))
    updateDelete(event.target.getAttribute('data-name') === 'delete')
    updateInternalErr({})
  }

  /*
   * Handle create comment when user comment
   */
  const handleAddComment = () => {
    if (!newCommentRef.current.value) {
      updateInternalErr({
        newComment: 'Required field',
      })
    } else {
      createComment({
        text: newCommentRef.current.value,
        postId: post.id,
        userId: user.id,
      })
      updateInternalErr({})
      newCommentRef.current.value = ''
    }
  }

  /*
   * Handle get value comment
   */
  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      handleAddComment()
    }
  }

  /*
   * Handle delete comment
   */
  const handleDelete = () => {
    deleteComment(commentId)
    updateModal(!isToggleModal)
  }

  /*
   * Handle edit comment
   */
  const handleSave = () => {
    if (!commentRef.current.value) {
      updateInternalErr({
        comment: 'Required field',
      })
    } else {
      updateComment({
        id: commentId,
        text: commentRef.current.value,
      })
      updateModal(!isToggleModal)
    }
  }

  return {
    isDelete,
    toggleModal,
    isToggleModal,
    handleKeyDown,
    handleDelete,
    handleSave,
    commentId,
    commentRef,
    internalErr,
    handleAddComment,
    newCommentRef,
  }
}

// Component comment
export const Comment = ({
  handleKeyDown,
  post,
  isToggleModal,
  toggleModal,
  isDelete,
  handleDelete,
  handleSave,
  commentId,
  commentRef,
  newCommentRef,
  isProcessing,
  user,
  internalErr,
  handleAddComment,
}: Props) => {
  const comment = post.comments.filter(item => item.id === commentId)[0]

  return (
    <>
      {isProcessing && <Indicator />}
      <div className='post-detail__comment-group'>
        {post.comments.map(item => (
          <div className='post-detail__comment' key={item.id}>
            <StaticImage name='avatar' className='avatar' />
            <div className='post-detail__comment-content'>
              <p className='post-detail__user-name'>
                {item.user ? item.user.name : 'Admin'}
              </p>
              <p className='comment-text'>{item.text}</p>
            </div>
            {user.id === item.user && item.user.id && (
              <>
                <i
                  onClick={toggleModal}
                  data-name='edit'
                  data-id={item.id}
                  className='fa fa-edit post-detail__icon-comment'
                />
                <i
                  onClick={toggleModal}
                  data-name='delete'
                  data-id={item.id}
                  className='fa fa-trash post-detail__icon-comment'
                />
              </>
            )}
          </div>
        ))}

        {isToggleModal && (
          <Popup
            title={`Are you ${isDelete ? 'delete' : 'update'} this comment ?`}
            toggleModal={toggleModal}
            onSubmit={isDelete ? handleDelete : handleSave}
            btnSubmit={isDelete ? 'Delete' : 'Save'}
            btnCancel='Cancel'
          >
            {!isDelete && (
              <InputGroup
                placeholder='Enter the comment'
                name='comment'
                defaultValue={comment ? comment.text : ''}
                inputRef={commentRef}
                error={internalErr}
              />
            )}
          </Popup>
        )}
      </div>
      {!_.isEmpty(user) && (
        <div className='post-detail__comment'>
          <StaticImage name='avatar' className='avatar' />
          <InputGroup
            placeholder='Enter the comment'
            onKeyDown={handleKeyDown}
            name='newComment'
            defaultValue=''
            error={internalErr}
            inputRef={newCommentRef}
          />
          <Button
            className='btn-submit btn success'
            onClick={handleAddComment}
            text='Add Comment'
          />
        </div>
      )}
    </>
  )
}

Comment.defaultProps = {
  comments: [],
  user: {},
}

const CommentWrapper = memo((props: Object) => (
  <Comment {...internalHook(props)} {...props} />
))

export default CommentWrapper
