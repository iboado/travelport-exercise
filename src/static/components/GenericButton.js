import React from "react";

const GenericButton = ({ buttonText, onClickFunction, id }) => {
  return () => (
    <button onClick={onClickFunction} id={id} data-testid={id}>
      {buttonText}
    </button>
  );
};

export default GenericButton;
