import React from "react";
import ShoppingList from "./ShoppingList";
import "../style.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Shopping List</h1>
      <ShoppingList />
    </div>
  );
};

export default App;
