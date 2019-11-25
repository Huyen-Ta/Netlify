// @flow
import React from 'react'

type Props = {|
  placeholder: String,
  name: String,
  defaultValue: String,
  className?: String,
  type?: String,
  typeInput?: String,

  isDisabled?: Boolean,
  error?: Object,

  onKeyDown: () => void,
  inputRef: () => void,
  onBlur: () => void,
|}

// Defined component input
const Input = ({
  onKeyDown,
  placeholder,
  name,
  defaultValue,
  inputRef,
  onBlur,
  isDisabled,
  className,
  type,
  error = {},
  typeInput,
}: Props) => {
  const isError = error && error[name]
  return (
    <div className='form__input-group'>
      {typeInput === 'textarea' ? (
        <textarea
          className={`${className ? className : 'form__textarea'} ${
            isError ? 'form__textarea--error' : ''
          }`}
          type={type || 'text'}
          placeholder={placeholder}
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          onBlur={onBlur}
          disabled={isDisabled}
          required
          data-gramm_editor='false'
        />
      ) : (
        <input
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
          ref={inputRef}
          required
          className={`${className ? className : 'form__textbox'} ${
            isError ? 'form__textbox--error' : ''
          }`}
          onBlur={onBlur}
          disabled={isDisabled}
          type={type || 'text'}
        />
      )}
    </div>
  )
}

// Defined default Props
Input.defaultProps = {
  isDisabled: false,

  onKeyDown: () => {},
  inputRef: () => {},
  onBlur: () => {},
}

export default Input
