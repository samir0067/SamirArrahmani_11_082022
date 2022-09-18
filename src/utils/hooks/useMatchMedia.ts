import { useState } from "react";

export const useMatchMedia = () => {
  const [downSm, setDownSm] = useState<boolean>(false);
  const [downMd, setDownMd] = useState<boolean>(false);

  window.matchMedia("(max-width: 768px)").addEventListener("change", (event) => {
    if (event.matches) {
      setDownSm(true);
    } else {
      setDownSm(false);
    }
  });

  window.matchMedia("(max-width: 900px)").addEventListener("change", (event) => {
    if (event.matches) {
      setDownMd(true);
    } else {
      setDownMd(false);
    }
  });

  return { downSm, downMd };
};
