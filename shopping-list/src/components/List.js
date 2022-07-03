import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";

const List = ({ item, handleTotal }) => {
  const [count, setCount] = useState(0);

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

  return (
    <div>
      <ul>
        <li>
          <input type="checkbox" />
          {item}
          <MinusCircleIcon onClick={onMinus} className="icon" />
          {count}
          <PlusCircleIcon onClick={onPlus} className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default List;
