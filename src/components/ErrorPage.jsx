import React from "react";

import { useParams, Link } from "react-router-dom";

function ErrorPage() {
  const { message } = useParams();

  return (
    <div>
      <h2>Error</h2>
      <p>An error occurred: {message}</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}

export default ErrorPage;
