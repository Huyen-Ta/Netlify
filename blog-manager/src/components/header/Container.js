import { graphql, compose } from 'react-apollo'

// Actions, context
import { UserContext } from '../../contexts/providers/User'
import { connects } from '../../contexts/helpers/Connect'
import { signOut, updateUserSuccess } from '../../contexts/actions/User'

// Component
import Header from './index'

// Queries, Mutation
import { UPDATE_USER } from '../../graphql/user/Mutation'

const HeaderContainer = compose(
  graphql(UPDATE_USER, {
    options: props => ({
      onCompleted: data => {
        props.updateUserSuccess(data.updateUser)
      },
      onError: props.onError,
    }),
    props: ({ mutate }) => ({
      updateUser: input => mutate({
        variables: {
          ...input,
        },
      }),
    }),
  })
)(Header)

const mapStateToProps = ([state]) => ({
  user: state.user || {},
})

const mapDispatchToProps = ([dispatch]) => ({
  onSignOut: () => dispatch(signOut()),
  updateUserSuccess: data => dispatch(updateUserSuccess(data)),
})

export default connects([UserContext], mapStateToProps, mapDispatchToProps)(
  HeaderContainer
)
