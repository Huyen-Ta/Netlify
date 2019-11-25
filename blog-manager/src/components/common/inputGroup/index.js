// @flow
import React from 'react'

// Component
import Input from '../input'

type Props = {|
  placeholder: String,
  name: String,
  defaultValue: String,
  className?: String,
  type?: String,
  title?: String,
  typeInput?: String,

  isDisabled?: Boolean,
  error?: Object,

  onKeyDown: () => void,
  inputRef: () => void,
  onBlur: () => void,
|}

// Defined component InputGroup
const InputGroup = ({
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
  title,
  typeInput,
}: Props) => {
  const isError = error && error[name]
  return (
    <div className='form__input-group--wrapper'>
      <div className='form__input-group--title'>
        {title && <h4 className='form__input-title'>{title}</h4>}
        {isError && <p className='form__text--error'>{error[name]}</p>}
      </div>
      <Input
        className={className}
        error={error}
        name={name}
        type={type}
        placeholder={placeholder}
        inputRef={inputRef}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        typeInput={typeInput}
        isDisabled={isDisabled}
      />
    </div>
  )
}

// Defined default Props
InputGroup.defaultProps = {
  isDisabled: false,

  onKeyDown: () => {},
  inputRef: () => {},
  onBlur: () => {},
}

export default InputGroup
