import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/solid";
import "../style.css";

const NoteCard = () => {
  const [isNew, setIsNew] = useState(true);

  const onNew = () => {
    setIsNew(!isNew);
  };

  return (
    <div className="card-container">
      <textarea className="card-text"></textarea>
      <button onClick={onNew}>
        {isNew ? "Save" : <TrashIcon className="icon" />}
      </button>
    </div>
  );
};

export default NoteCard;
