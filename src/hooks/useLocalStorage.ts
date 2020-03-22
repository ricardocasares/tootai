import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, init: T) {
  const [value, setStoredValue] = useState<T>(init);
  const listener = (ev: StorageEvent) => {
    console.log(ev, ev.key, ev.storageArea);
    if (ev.key === key) {
      if (!ev.newValue) {
        setStoredValue(init);
      }
      if (ev.newValue) {
        try {
          setStoredValue(JSON.parse(ev.newValue));
        } catch (error) {
          console.log(error);
          setStoredValue(init);
        }
      }
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : init);
    } catch (error) {
      console.log(error);
      setStoredValue(init);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", listener);

    return () => window.removeEventListener("storage", listener);
  }, [value]);

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(value) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return { value, setValue };
}
