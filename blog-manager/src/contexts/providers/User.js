// @flow
import React, { useReducer, createContext } from 'react'
import userReducer, { initialState } from '../reducers/User'
import {
  KEY_LOCAL_STORAGE_USER,
  usePersistedContext,
  usePersistedReducer,
} from '../persist'

type Props = {|
  children: React.Node,
|}

export const UserContext = createContext()

const UserProvider = ({ children }: Props) => {
  // Create a global store to store the user state
  const stateStore = usePersistedContext(KEY_LOCAL_STORAGE_USER)
  const stateApp = stateStore ? stateStore : initialState

  // Global will be a state manager to manage user state.
  const value = usePersistedReducer(
    useReducer(userReducer, stateApp),
    KEY_LOCAL_STORAGE_USER // The localStorage user key
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
