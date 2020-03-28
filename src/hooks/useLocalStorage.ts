import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, init: T) => {
  const [state, setState] = useState<T>(init);

  useEffect(() => {
    const value = localStorage.getItem(key);

    if (value) {
      setState(JSON.parse(value));
    }
  }, [key]);

  useEffect(() => {
    try {
      if (!key) return;
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [init]);

  useEffect(() => {
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key, init]);

  const handler = (e: StorageEvent) => {
    try {
      if (e.key !== key) return;
      if (e.newValue === null) setState(init);
      if (e.newValue) setState(JSON.parse(e.newValue));
    } catch (error) {
      console.error(error);
    }
  };

  return [state, setState] as const;
};
