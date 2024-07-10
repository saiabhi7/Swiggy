import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(false);

  useEffect(() => {
    navigator.onLine ? setOnlineStatus(true) : setOnlineStatus(false);
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
