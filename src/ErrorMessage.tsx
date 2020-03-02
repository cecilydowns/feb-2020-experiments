import React from "react";

interface Props {
  error: string;
}

const ErrorMessage = ({ error }: Props) => (
  <div className="message error">{error}</div>
);

export default ErrorMessage;
