import { useRef, useState } from "react";
import { outputError } from "@/services/output-error";

export const useFetch = <T>(promise: Promise<T>, func?: Function) => {
  const [response, setResponse] = useState<T>();
  const [isLoading, setIsLoding] = useState<boolean>(false);
  const refFetchLock = useRef(false);

  const fetchData = async () => {
    if (refFetchLock.current) return;
    refFetchLock.current = true;

    setIsLoding(true);
    promise
      .then((response) => {
        func ? setResponse(func(response)) : setResponse(response);
      })
      .catch((err) => outputError(err))
      .finally(() => {
        setIsLoding(false);
        refFetchLock.current = false;
      });
  };

  return { response, isLoading, fetchData };
};
