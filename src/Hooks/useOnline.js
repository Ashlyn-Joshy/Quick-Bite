import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const online = () => {
    setIsOnline(true);
  };
  const offline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => (
      window.removeEventListener("online", online),
      window.removeEventListener("offline", offline)
    );
  }, []);

  return isOnline;
};

export default useOnline;
