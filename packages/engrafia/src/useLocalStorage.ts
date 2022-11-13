import { useState, useEffect, SetStateAction, Dispatch } from 'react';

function getStorageValue(key: string) {
  return localStorage.getItem(key);
}

export const useLocalStorage = (
  key: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!getStorageValue(key)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  useEffect(() => {
    setValue(getStorageValue(key) ?? '');
  }, []);

  return [value, setValue];
};
