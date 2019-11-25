import { graphql, compose } from 'react-apollo'

// Mutation
import { SIGN_IN } from '../../graphql/user/Mutation'

// Connect
import {
  signIn,
  signInSuccess,
  signInFailed,
} from '../../contexts/actions/User'
import { connects } from '../../contexts/helpers/Connect'
import { UserContext } from '../../contexts/providers/User'

// Component
import SignIn from './index'

const SignInContainer = compose(
  graphql(SIGN_IN, {
    options: props => ({
      onCompleted: data => {
        props.signInSuccess(data.signinUser)
      },

      onError: error => {
        props.signInFailed(error)
      },
    }),
    props: ({ mutate, ownProps }) => ({
      onSignIn: user => {
        ownProps.signIn()

        return mutate({
          variables: {
            email: user.email,
            password: user.password,
          },
        })
      },
    }),
  })
)(SignIn)

const mapStateToProps = ([state]) => ({
  type: state.type,
  user: state.user && state.user.user,
  error: state.error,
  isProcessing: state.isProcessing,
})

const mapDispatchToProps = ([dispatch]) => ({
  signIn: () => dispatch(signIn()),
  signInSuccess: user => dispatch(signInSuccess(user)),
  signInFailed: error => dispatch(signInFailed(error)),
})

export default connects([UserContext], mapStateToProps, mapDispatchToProps)(
  SignInContainer
)
