import { useRef } from "react";
import { isEqual } from "lodash";

type PropsType = Record<string, string>;

const useDeepCompareMemoize = (value: PropsType) => {
  const valueRef = useRef<PropsType>();

  if (!isEqual(value, valueRef.current)) {
    valueRef.current = value;
  }
  return valueRef.current;
};

export default useDeepCompareMemoize;
