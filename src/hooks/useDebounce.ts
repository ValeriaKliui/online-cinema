import { useState } from 'react';

export const useDebounce = ({ value }) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  setTimeout(() => {
    setDebouncedValue(value);
  }, 5000);

  return debouncedValue;
};
