import useQuery from "./query";
import useMutation from "./mutation";

type Options = {
  cachePolicy?: "cache" | "no-cache";
};

export const useApi = {
  get: (
    url: string,
    propsVariables?: Record<string, string>,
    options?: Options
  ) => useQuery(url, propsVariables, options),
  post: (url: string) => useMutation("post", url),
  put: (url: string) => useMutation("put", url),
  patch: (url: string) => useMutation("patch", url),
  delete: (url: string) => useMutation("post", url),
};
