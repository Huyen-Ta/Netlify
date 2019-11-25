import React, { createContext, useReducer } from 'react'
import mainReducer, { initialState } from '../reducers/Main'


export const MainContext = createContext()

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  const store = [state, dispatch]

  return (
    <MainContext.Provider value={store}>{children}</MainContext.Provider>
  )
}

export default MainProvider
