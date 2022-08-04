import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    console.log(`El valor de la busqueda es: ${e.target.value}`);
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Caballero Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export { TodoSearch };
