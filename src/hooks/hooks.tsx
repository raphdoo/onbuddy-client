import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'
import { RootState } from 'src/store'

export function useSelector(selector: {
  (state: RootState): boolean
  (state: unknown): unknown
}) {
  return useReduxSelector(selector)
}

export const useDispatch = () => useReduxDispatch()
