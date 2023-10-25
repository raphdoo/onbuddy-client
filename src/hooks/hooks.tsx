import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'

export function useSelector(selector) {
  return useReduxSelector(selector)
}

export const useDispatch = () => useReduxDispatch()
