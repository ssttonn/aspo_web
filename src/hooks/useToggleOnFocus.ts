import { useState } from "react";

const useToggleOnFocus = () => {
  const [isFocused, setIsFocused] = useState(false);

  const eventHandlers = {
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
  };

  return { isFocused, eventHandlers };
};

export default useToggleOnFocus;
