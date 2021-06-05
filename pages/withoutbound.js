import { useEffect, useCallback } from "react";

function Ahh() {
  const isError = useCallback(() => {
    throw Error("error ey");
  }, []);
  useEffect(() => {
    isError();
  }, []);
  return <div>ahh</div>;
}

export default Ahh;
