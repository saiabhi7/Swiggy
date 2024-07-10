import React, { useEffect, useState } from "react";

const useDebounce = (searchValue, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(searchValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, delay]);

  return debounceValue;
};

export default useDebounce;
