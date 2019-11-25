import React, { useContext } from 'react'

/**
 * This callback type is called .
 *
 * @callback Callback
 * @param { Array } states
 * @param { Array } dispatchs
 */

/**
 * Higher order component for connect multiple Context
 * @param { Array } contexts - Array Context
 * @param { Callback } mapStateToProps
 * @param { Callback } mapStateToProps
 */
export const connects = (contexts, mapStateToProps, mapDispatchToProps) => function createWrapper(WrapperComponent) {
  return function createConnect(props) {
    let states = []
    let dispatchs = []
    contexts.forEach(context => {
      const [state, dispatch] = context && useContext(context)
      state && states.push(state)
      dispatch && dispatchs.push(dispatch)
    })

    const stateProps = mapStateToProps ? mapStateToProps(states) : {}
    const dispatchProps = mapDispatchToProps
      ? mapDispatchToProps(dispatchs)
      : {}
    return <WrapperComponent {...stateProps} {...dispatchProps} {...props} />
  }
}
