import useMergeState from 'hooks/mergeState';
import { useCallback } from 'react';

import api from '../../utils/api';

export type Methodtype = 'post' | 'patch' | 'put' | 'delete';

const useMutation = (
  method: Methodtype,
  url: string
): [
  {
    data: Record<string, string> | null;
    error: any | null;
    isLoading: boolean;
    variables?: Record<string, any>;
  },
  (newVariables?: Record<string, any>) => void
] => {
  const [state, mergeState] = useMergeState({
    data: null,
    error: null,
    isLoading: false,
    variables: {},
  });

  const makeRequest = useCallback(
    (variables = {}) =>
      new Promise((resolve, reject) => {
        mergeState((currentState) => ({
          ...currentState,
          isLoading: true,
          variables,
        }));

        api[method](url, variables).then(
          (data: any) => {
            resolve(data);
            mergeState({ data, error: null, isLoading: false });
          },
          (error) => {
            reject(error);
            mergeState({ error, data: null, isLoading: false });
          }
        );
      }),
    []
  );

  return [
    {
      ...state,
    },
    makeRequest,
  ];
};

export default useMutation;
