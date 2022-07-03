import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import "../style.css";

const ShoppingList = () => {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const onAdd = () => {
    setItems([...items, { item: inputItem, id: uuidv4(), checked: false }]);
    setInputItem("");
  };

  const handleTotal = (operator) => {
    if (operator === "+") {
      setTotal(total + 1);
    } else {
      setTotal(total - 1);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button onClick={onAdd}>
          <PlusIcon className="icon" />
        </button>
      </div>
      <div>
        {items.map((item) => (
          <List item={item.item} handleTotal={handleTotal} />
        ))}
      </div>
      <p>{total}</p>
    </div>
  );
};

export default ShoppingList;
