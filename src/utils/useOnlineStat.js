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

// hypothetical situation ::-- kalpanic situation

// Not mendatory of being capital Letter of Component and start Hook name wit use But BEcause of Most of the projects use linter, that linetr throes  error alwayas use what library recommend
