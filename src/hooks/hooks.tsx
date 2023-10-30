import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'
import { RootState } from '../store/index'

export function useSelector(selector: (state: RootState) => any) {
  return useReduxSelector(selector)
}

export const useDispatch = () => useReduxDispatch()
