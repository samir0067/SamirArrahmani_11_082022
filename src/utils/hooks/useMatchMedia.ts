import { useState } from "react";

export const useMatchMedia = () => {
  const [downSm, setDownSm] = useState<boolean>(false);

  window.matchMedia("(max-width: 768px)").addEventListener("change", (event) => {
    if (event.matches) {
      setDownSm(true);
    } else {
      setDownSm(false);
    }
  });

  return { downSm };
};
