import { useCallback, useEffect } from "react";
import { isEqual } from "lodash";

import api from "../../utils/api";
import useMergeState from "hooks/mergeState";
import useDeepCompareMemoize from "hooks/deepCompareMemoize";

type Cache = {
  [key: string]: {
    data: any | null;
    apiVariables: any;
  };
};

type Options = {
  cachePolicy?: "cache" | "no-cache";
};

const cache: Cache = {};

const useQuery = (
  url: string,
  propsVariables: Record<string, string> = {},
  options: Options = {}
): [
  {
    data: any | null;
    error: any | null;
    isLoading: boolean;
    variables: Record<string, any>;
  },
  (newVariables?: Record<string, any>) => Promise<void>
] => {
  const { cachePolicy = "cache" } = options;

  const getCache = (url: string) => {
    if (cache[url] === undefined) return null;
    return cache[url];
  };

  const propsVariablesMemoized = useDeepCompareMemoize(propsVariables);

  const isCacheAvailable =
    getCache(url) !== null &&
    isEqual(getCache(url)?.apiVariables, propsVariables);
  const canUseCache = isCacheAvailable && cachePolicy === "cache";
  const [state, mergeState] = useMergeState({
    data: canUseCache ? cache[url].data : null,
    error: null,
    isLoading: !canUseCache,
    variables: {},
  });

  const makeRequest = useCallback(
    (newVariables?: Record<string, any>): Promise<void> => {
      const variables = { ...state.variables, ...(newVariables || {}) };
      const apiVariables = { ...propsVariablesMemoized, ...variables };

      return new Promise<void>((resolve, reject) => {
        api.get(url, apiVariables).then(
          (data: any) => {
            cache[url] = { data, apiVariables };
            mergeState((currentState) => {
              resolve();
              return {
                ...currentState,
                data,
                error: null,
                isLoading: false,
              };
            });
          },
          (error) => {
            reject(error);
            mergeState((currentState) => ({
              ...currentState,
              error,
              data: null,
              isLoading: false,
            }));
          }
        );
      });
    },
    [propsVariablesMemoized]
  );

  useEffect(() => {
    if (canUseCache) return;

    makeRequest();
  }, []);

  return [
    {
      ...state,
      variables: { ...propsVariablesMemoized, ...state.variables },
    },
    makeRequest,
  ];
};

export default useQuery;
