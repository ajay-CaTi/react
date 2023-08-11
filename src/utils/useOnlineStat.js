//  First find the contract [INPUT of HOOK, OUTPUT of HOOK]
import { useEffect, useState } from "react";

const useOnlineStat = () => {
  const [onlineStat, setOnlineStat] = useState(true);
  // check if online

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStat(false);
    });

    window.addEventListener("online", () => {
      setOnlineStat(true);
    });
  }, []);
  //   console.log(onlineStat);
  // boolean value
  return onlineStat;
};

export default useOnlineStat;
