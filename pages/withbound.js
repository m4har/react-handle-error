import { useEffect, useCallback } from "react";
import ErrorHOC from "../HOC/ErrorBound";

function Ahh() {
  const isError = useCallback(() => {
    throw Error("error ey");
  }, []);
  useEffect(() => {
    isError();
  }, []);
  return <div>ahh</div>;
}

export default ErrorHOC(Ahh);
