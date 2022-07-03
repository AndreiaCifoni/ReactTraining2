import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import "../style.css";

const ShoppingList = () => {
  const [inputItem, setInputItem] = useState("");
  const [addItem, setAddItem] = useState([]);

  const onAdd = () => {
    setAddItem([...addItem, { item: inputItem, id: uuidv4(), checked: false }]);
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
    </div>
  );
};

export default ShoppingList;
