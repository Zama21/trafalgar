import React, { useEffect, useCallback, DependencyList } from 'react';

type DebounceFunction<T extends (...args: unknown[]) => unknown> = (...args: Parameters<T>) => void;

const useDebounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  deps: DependencyList = [],
): DebounceFunction<T> => {
  const timeoutRef = React.useRef<number | null>(null);

  const debouncedFunction: DebounceFunction<T> = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        func(...args);
      }, wait);
    },
    [func, wait],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [deps]);

  return debouncedFunction;
};

export default useDebounce;
