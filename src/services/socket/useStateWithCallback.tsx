import { useCallback, useEffect, useRef, useState } from "react";

const useStateWithCallback = (
  initialState: string[],
): [state: string[], setState: Function, deleteState: Function] => {
  const [state, setState] = useState<string[]>(initialState);
  const refCb = useRef<Function | null>(null);

  console.log("clients", state);

  const addState = useCallback((newClient: string, cb: Function) => {
    setState((prev) => {
      if (prev.includes(newClient)) {
        return prev;
      }

      refCb.current = cb;
      return [...prev, newClient];
    });
  }, []);

  const deleteState = useCallback((clientDel: string, cb: Function) => {
    setState((prev) => {
      const newState = prev.filter((c) => c !== clientDel);
      refCb.current = cb;
      return [...newState];
    });
  }, []);

  useEffect(() => {
    if (refCb.current) {
      refCb.current(state);
      refCb.current = null;
    }
  }, [state]);

  return [state, addState, deleteState];
};

export default useStateWithCallback;
