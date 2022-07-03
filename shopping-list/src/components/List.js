import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import "../style.css";

const List = ({ item, handleTotal }) => {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const onMinus = () => {
    if (count > 0) {
      setCount(count - 1);
      handleTotal("-");
    }
  };

  const onPlus = () => {
    setCount(count + 1);
    handleTotal("+");
  };

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <ul className="element">
        <li>
          <input type="checkbox" checked={checked} onClick={onCheck} />
          <p className={checked ? "item-p checked" : "item-p"}>{item}</p>

          <MinusCircleIcon onClick={onMinus} className="icon-list" />
          {count}
          <PlusCircleIcon onClick={onPlus} className="icon-list" />
        </li>
      </ul>
    </div>
  );
};

export default List;
