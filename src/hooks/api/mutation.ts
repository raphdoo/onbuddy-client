import useMergeState from "hooks/mergeState";
import { useCallback } from "react";

import api from "../../utils/api";

export type Methodtype = "post" | "patch" | "put" | "delete";

const useMutation = (method: Methodtype, url: string) => {
  const [state, mergeState] = useMergeState({
    data: null,
    error: null,
    isLoading: false,
  });

  const makeRequest = useCallback(
    (variables = {}) =>
      new Promise((resolve, reject) => {
        mergeState((currentState) => ({ ...currentState, isLoading: true }));

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
    [method, url, mergeState]
  );

  return [
    {
      ...state,
      [isWorkingAlias[method]]: state.isLoading,
    },
    makeRequest,
  ];
};

const isWorkingAlias = {
  post: "isCreating",
  put: "isUpdating",
  patch: "isUpdating",
  delete: "isDeleting",
};

export default useMutation;
