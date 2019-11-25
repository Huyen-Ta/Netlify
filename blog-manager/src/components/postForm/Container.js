import { navigate } from 'gatsby'

import { graphql, compose } from 'react-apollo'

// Actions, context
import { MainContext } from '../../contexts/providers/Main'
import { connects } from '../../contexts/helpers/Connect'
import {
  getPostDetail,
  createPostSuccess,
  updatePostSuccess,
} from '../../contexts/actions/Main'

import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../../graphql/post/Mutation'

// Helpers
import ROUTER from '../../constants/Router'

// Component
import PostForm from './index'

const PostFormContainer = compose(
  graphql(CREATE_POST, {
    options: props => ({
      onCompleted: data => {
        props.createPostSuccess(data.createPost)
      },

      onError: props.onError,
    }),
    props: ({ mutate }) => ({
      createPost: input => mutate({
        variables: {
          ...input,
        },
      }),
    }),
  }),
  graphql(UPDATE_POST, {
    options: props => ({
      onCompleted: data => {
        props.updatePostSuccess(data.updatePost)
        navigate(ROUTER.HOME)
      },
      onError: props.onError,
    }),
    props: ({ mutate }) => ({
      updatePost: input => mutate({
        variables: {
          ...input,
        },
      }),
    }),
  }),
  graphql(DELETE_POST, {
    options: props => ({
      onCompleted: () => {
        navigate(ROUTER.HOME)
      },
      onError: props.onError,
    }),
    props: ({ mutate }) => ({
      deletePost: id => mutate({
        variables: {
          id,
        },
      }),
    }),
  })
)(PostForm)

const mapStateToProps = ([state]) => ({
  type: state.type || '',
})

const mapDispatchToProps = ([dispatch]) => ({
  getPostDetail: data => dispatch(getPostDetail(data)),
  createPostSuccess: data => dispatch(createPostSuccess(data)),
  updatePostSuccess: data => dispatch(updatePostSuccess(data)),
})

export default connects([MainContext], mapStateToProps, mapDispatchToProps)(
  PostFormContainer
)
