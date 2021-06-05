import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const ErrorHOC = (Comp) => (props) =>
  (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Comp {...props} />
    </ErrorBoundary>
  );

export default ErrorHOC;
