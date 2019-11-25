// @flow
import React from 'react'

type Props = {|
  className: String,
  text: String,
  type?: String,
  isDisabled: Boolean,
  onClick: () => void,
|}

// Define component Button
const Button = ({ className, text, isDisabled, onClick, type }: Props) => (
  <button
    className={`btn ${className ? className : ''} ${
      isDisabled ? 'btn-disabled' : ''
    }`}
    onClick={onClick}
    disabled={isDisabled}
    type={type || 'button'}
  >
    {text}
  </button>
)

// Defined default Props
Button.defaultProps = {
  className: '',
  text: '',
  isDisabled: false,
  onClick: () => {},
}

export default Button
