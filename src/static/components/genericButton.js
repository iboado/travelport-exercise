import React from "react";

const genericButton = ({ buttonText, onClickFunction }) => {
  return () => <button onClick={onClickFunction}>{buttonText}</button>;
};

export default genericButton;
