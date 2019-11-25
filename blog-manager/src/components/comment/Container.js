import { graphql, compose } from 'react-apollo'

// Mutation
import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from '../../graphql/comment/Mutation'

// Actions, context
import { MainContext } from '../../contexts/providers/Main'
import { connects } from '../../contexts/helpers/Connect'
import {
  createCommentSuccess,
  createCommentRequest,
  updateCommentSuccess,
  updateCommentRequest,
  deleteCommentSuccess,
  deleteCommentRequest,
} from '../../contexts/actions/Main'

// Component
import Comment from './index'

const CommentContainer = compose(
  graphql(CREATE_COMMENT, {
    options: props => ({
      onCompleted: data => {
        props.createCommentSuccess(data.createComment)
      },

      onError: props.onError,
    }),
    props: ({ mutate, ownProps }) => ({
      createComment: input => {
        ownProps.createCommentRequest()

        return mutate({
          variables: {
            ...input,
          },
        })
      },
    }),
  }),
  graphql(UPDATE_COMMENT, {
    options: props => ({
      onCompleted: data => {
        props.updateCommentSuccess(data.updateComment)
      },
      onError: props.onError,
    }),
    props: ({ mutate, ownProps }) => ({
      updateComment: input => {
        ownProps.updateCommentRequest()

        return mutate({
          variables: {
            ...input,
          },
        })
      },
    }),
  }),

  graphql(DELETE_COMMENT, {
    options: props => ({
      onCompleted: data => {
        props.deleteCommentSuccess(data.deleteComment)
      },
      onError: props.onError,
    }),
    props: ({ mutate, ownProps }) => ({
      deleteComment: id => {
        ownProps.deleteCommentRequest()

        return mutate({
          variables: {
            id,
          },
        })
      },
    }),
  })
)(Comment)

const mapStateToProps = ([state]) => ({
  isProcessing: state.isProcessing,
})

const mapDispatchToProps = ([dispatch]) => ({
  createCommentSuccess: data => dispatch(createCommentSuccess(data)),
  createCommentRequest: () => dispatch(createCommentRequest()),
  updateCommentSuccess: data => dispatch(updateCommentSuccess(data)),
  updateCommentRequest: () => dispatch(updateCommentRequest()),
  deleteCommentSuccess: data => dispatch(deleteCommentSuccess(data)),
  deleteCommentRequest: () => dispatch(deleteCommentRequest()),
})

export default connects([MainContext], mapStateToProps, mapDispatchToProps)(
  CommentContainer
)
