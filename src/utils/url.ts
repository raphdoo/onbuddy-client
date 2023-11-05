import queryString from "query-string";

export const objectToQueryString = (obj: object, options = {}) =>
  queryString.stringify(obj, {
    arrayFormat: "bracket",
    ...options,
  });
