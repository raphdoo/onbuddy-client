import { useCallback, useEffect } from "react";
import { isEqual } from "lodash";

import api from "../../utils/api";
import useMergeState from "hooks/mergeState";
import useDeepCompareMemoize from "hooks/deepCompareMemoize";

type Cache = {
  [key: string]: {
    data: Record<string, string> | null;
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
    data: Record<string, string> | null;
    error: any | null;
    isLoading: boolean;
    variables: Record<string, any>;
  },
  (newVariables?: Record<string, any>) => void
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

  const makeRequest = useCallback((newVariables?: Record<string, any>) => {
    const variables = { ...state.variables, ...(newVariables || {}) };
    const apiVariables = { ...propsVariablesMemoized, ...variables };

    api.get(url, apiVariables).then(
      (data: any) => {
        cache[url] = { data, apiVariables };
        mergeState((currentState) => {
          return {
            ...currentState,
            data,
            error: null,
            isLoading: false,
          };
        });
      },
      (error) => {
        mergeState((currentState) => ({
          ...currentState,
          error,
          data: null,
          isLoading: false,
        }));
      }
    );
  }, []);

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
