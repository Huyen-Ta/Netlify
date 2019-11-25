import { useEffect } from 'react'

const isBrowser = () => typeof window !== 'undefined'

export const KEY_LOCAL_STORAGE_USER = 'user'

export function usePersistedContext(key = KEY_LOCAL_STORAGE_USER) {
  const persistedContext = isBrowser() && localStorage.getItem(key)
  return persistedContext ? JSON.parse(persistedContext) : null
}

export function usePersistedReducer(
  [state, dispatch],
  key = KEY_LOCAL_STORAGE_USER
) {
  useEffect(() => {
    localStorage.setItem(key, isBrowser() && JSON.stringify(state))
  }, [state])
  return [state, dispatch]
}
