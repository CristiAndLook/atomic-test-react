import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
  const clickOnButton = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button className="CreateTodoButton"
    onClick={clickOnButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };