// @flow
import React, { memo, useState, useRef, useEffect } from 'react'
import { navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import _ from 'lodash'

// Component
import InputGroup from '../common/inputGroup'
import Button from '../common/button'
import Indicator from '../common/indicator'

// Action
import { USER_TYPES, resetType } from '../../contexts/actions/User'

// Constant
import ROUTER from '../../constants/Router'

type Props = {|
  user?: Object,
  internalErr: Object,
  errServer: Object,
  isProcessing: Boolean,
  emailRef: () => void,
  passwordRef: () => void,
  handleSignIn: () => void,
|}

type SignInProps = {|
  onSignIn: Function,
  type: String,
  error: Object,
|}

export const internalHook = ({ onSignIn, type, error }: SignInProps) => {
  const [internalErr, updateInternalErr] = useState({})
  const [errServer, updateErrServer] = useState(error)

  const emailRef = useRef('')
  const passwordRef = useRef('')

  useEffect(() => {
    resetType()
    updateErrServer({})
  }, [])

  /*
   * When user sign in success will redirect to home page
   */
  useEffect(() => {
    if (type === USER_TYPES.SIGN_IN_SUCCESS) {
      navigate(ROUTER.HOME)
    } else if (type === USER_TYPES.SIGN_OUT) {
      updateErrServer({})
    } else if (type === USER_TYPES.SIGN_IN_FAILED) {
      updateErrServer(error)
    }
  }, [type])

  /*
   * Handle sign in
   */
  const handleSignIn = event => {
    event && event.preventDefault()

    const user = {
      email: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    }

    const validate = {
      email: !emailRef.current.value ? 'Required field' : '',
      password: !passwordRef.current.value ? 'Required field' : '',
    }

    if (Object.values(validate).find(item => !!item)) {
      updateInternalErr({
        ...validate,
      })
    } else {
      updateInternalErr({})
      onSignIn(user)
    }
  }

  return {
    internalErr,
    emailRef,
    passwordRef,
    handleSignIn,
    errServer,
  }
}

// Component sign in
export const SignIn = ({
  emailRef,
  passwordRef,
  internalErr,
  handleSignIn,
  user,
  errServer,
  isProcessing,
}: Props) => {
  const errMessage = errServer.message && errServer.message.split(':')[1]
  return (
    <>
      {isProcessing && <Indicator />}
      <Helmet
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
          },
        ]}
      >
        <title>SignIn</title>
      </Helmet>
      <div className='container'>
        <form className='form__wrapper' onSubmit={handleSignIn}>
          <div className='form__content'>
            <h3 className='form__header__title'>Sign In</h3>
            <InputGroup
              placeholder='Enter the email'
              inputRef={emailRef}
              type='email'
              defaultValue={user ? user.email : ''}
              name='email'
              title='Email'
              error={internalErr}
            />
            <InputGroup
              placeholder='Enter the password'
              inputRef={passwordRef}
              type='password'
              defaultValue={user ? user.password : ''}
              name='password'
              title='Password'
              error={internalErr}
            />
            {errServer && _.isEmpty(internalErr) && (
              <p className='form__sign-in--error'>{errMessage}</p>
            )}
          </div>
          <div className='form__footer'>
            <Button
              onClick={handleSignIn}
              className='btn-submit btn-success'
              type='submit'
              text='Sign In'
            />
          </div>
        </form>
      </div>
    </>
  )
}

SignIn.defaultProps = {
  user: {},
  errServer: {},
}

const SignInWrapper = memo((props: Object) => (
  <SignIn {...internalHook(props)} {...props} />
))

export default SignInWrapper
