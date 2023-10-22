import { useRouteError } from "react-router-dom";
import React from "react";  // Import React for JSX

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage(): React.JSX.Element {
  const error: RouteError = useRouteError();
  console.error(error);

  return (
    <>
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </>
  );
}