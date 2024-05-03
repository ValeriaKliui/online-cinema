import { useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
  const elemRef = useRef();
  const [isOpened, setIsOpened] = useState(false);
  const onClick = (e) =>
    elemRef.current.contains(e.target) && setIsOpened(false);

  console.log(isOpened);
  useEffect(() => {
    document.addEventListener("click", onClick);
  }, []);
  return elemRef;
};