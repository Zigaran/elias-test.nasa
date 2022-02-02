/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
): void => {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    if ((window as any).document) {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    }

    return () => {
      if ((window as any).document) {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      }
    };

    // Reload only if ref or handler changes
  }, [ref, handler]);
};

export default useOnClickOutside;
