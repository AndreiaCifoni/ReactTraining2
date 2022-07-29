import React from "react";
import NoteCard from "./NoteCard";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <div>
        <h1>Notes</h1>
        <Search />
      </div>
      <div>
        <NoteCard />
      </div>
    </div>
  );
};

export default App;
