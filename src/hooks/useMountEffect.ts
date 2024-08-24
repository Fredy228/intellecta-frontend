import { useEffect, useRef } from "react";

export const useMountEffect = (fn: Function) => {
  const isFirst = useRef(false);
  useEffect(() => {
    if (isFirst.current) return;
    isFirst.current = true;
    fn();
  }, []);
};
