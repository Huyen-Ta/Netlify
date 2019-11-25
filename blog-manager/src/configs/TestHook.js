import React from 'react'
import { render } from 'react-testing-library'

const TestHook = (useHook, props) => {
  const RenderProp = ({ children, ...rest }) => children(useHook(rest))
  const returnVal = {}
  render(
    <RenderProp {...props}>
      {val => {
        Object.assign(returnVal, val)
        return null
      }}
    </RenderProp>
  )
  return returnVal
}

export default TestHook
