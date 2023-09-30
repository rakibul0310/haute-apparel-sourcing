import { useEffect } from "react";

const useClickOutside = (specificElementRef, callback) => {
  const handleClickOutside = (event) => {
    if (
      specificElementRef.current &&
      !specificElementRef.current.contains(event.target)
    ) {
      // Call your callback function or perform any action you want here
      console.log("Clicked outside the target and specific element.");
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return null;
};

export default useClickOutside;
