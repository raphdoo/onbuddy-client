import { useState, useCallback, Dispatch } from 'react';
import { isFunction } from 'lodash';

export type State = {
  data: any | null;
  error: string | null;
  isLoading: boolean;
  variables?: Record<string, string>;
};

const useMergeState = (initialState: State): [State, Dispatch<StateUpdate>] => {
  const [state, setState] = useState<State>(initialState || {});

  const mergeState = useCallback((newState: StateUpdate) => {
    if (isFunction(newState)) {
      setState((currentState: State) => ({
        ...currentState,
        ...newState(currentState),
      }));
    } else {
      setState((currentState: State) => ({ ...currentState, ...newState }));
    }
  }, []);

  return [state, mergeState];
};

type StateUpdate = State | ((state: State) => any);

export default useMergeState;
