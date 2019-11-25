// @flow
import React, { memo, useState, useRef } from 'react'
import _ from 'lodash'
import { Link, navigate } from 'gatsby'

// Constants
import ROUTER from '../../constants/Router'

// Component
import InputGroup from '../common/inputGroup'
import StaticImage from '../common/static-image'
import Popup from '../common/popup'
import Button from '../common/button'

type Props = {|
  toggleModal: () => void,
  onSignOut: () => void,
  handleSave: () => void,
  inputRef: () => void,
  toggleDropdown: () => void,
  isToggleModal: Boolean,
  isToggleDropdown: Boolean,
  user: Object,
  internalErr: Object,
|}

type HeaderProps = {|
  updateUser: Function,
  user: Object,
|}

export const internalHook = ({ updateUser, user }: HeaderProps) => {
  const [isToggleModal, updateModal] = useState(false)
  const [isToggleDropdown, updateDropdown] = useState(false)
  const [internalErr, updateInternalErr] = useState({})
  const inputRef = useRef('')

  /*
   * Handle toggle modal when user click profile
   */
  const toggleModal = () => {
    updateModal(!isToggleModal)
    updateDropdown(false)
    updateInternalErr({})
  }

  const toggleDropdown = () => {
    updateDropdown(!isToggleDropdown)
  }

  /*
   * Handle edit user name profile
   */
  const handleSave = () => {
    if (!inputRef.current.value) {
      updateInternalErr({
        userName: 'Required field',
      })
    } else {
      updateUser({
        id: user.id,
        name: inputRef.current.value,
      })
      updateModal(false)
    }
  }

  return {
    isToggleModal,
    isToggleDropdown,
    toggleDropdown,
    toggleModal,
    handleSave,
    inputRef,
    internalErr,
  }
}

// Render search filter
export const renderSearchFilter = (
  keywordRef: Function,
  handleSearch: Function
) => {
  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      handleSearch()
    }
  }

  return (
    <div className='search-wrapper'>
      <InputGroup
        placeholder='Enter keywords...'
        name='keyword'
        defaultValue=''
        className='input-search'
        inputRef={keywordRef}
        onKeyDown={handleKeyDown}
      />
      <i className='fa fa-search icon-search' onClick={handleSearch} />
    </div>
  )
}

// Component header
export const Header = ({
  toggleModal,
  isToggleModal,
  isToggleDropdown,
  toggleDropdown,
  onSignOut,
  handleSave,
  user,
  inputRef,
  internalErr,
}: Props) => {
  const isUser = _.isEmpty(user)

  const handleSignOut = () => {
    onSignOut()
  }

  const handleNavigate = () => {
    navigate(ROUTER.SIGN_IN)
  }

  return (
    <header className='header'>
      <Link to={ROUTER.HOME} className='logo'>
        <StaticImage name='logo' />
      </Link>
      <div className='header__group'>
        <button className='header__profile' onClick={toggleDropdown}>
          <StaticImage
            name={`${isUser ? 'default-avatar' : 'avatar'}`}
            className='avatar'
          />
        </button>
        {isToggleDropdown && (
          <div className='dropdown'>
            {!isUser && (
              <span
                role='presentation'
                onClick={toggleModal}
                className='header__user-profile'
              >
                {user.name}
              </span>
            )}
            <Button
              className='header__btn-sign-in'
              onClick={!isUser ? handleSignOut : handleNavigate}
              text={!isUser ? 'Sign Out' : 'Sign In'}
            />
          </div>
        )}
        {isToggleModal && (
          <Popup
            title='Are you edit user name ?'
            toggleModal={toggleModal}
            onSubmit={handleSave}
            btnSubmit='Save'
            btnCancel='Cancel'
          >
            <div className='header__user-name-group'>
              <p className='header__user-name'>User Name: </p>
              <InputGroup
                placeholder='Enter the user name'
                name='userName'
                defaultValue={user ? user.name : ''}
                inputRef={inputRef}
                error={internalErr}
              />
            </div>
          </Popup>
        )}
      </div>
    </header>
  )
}

const HeaderWrapper = memo((props: Object) => (
  <Header {...internalHook(props)} {...props} />
))

export default HeaderWrapper
