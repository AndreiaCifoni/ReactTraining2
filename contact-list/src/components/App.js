import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    setPeople(data.results);
    console.log(data.results);
  };

  return (
    <div>
      <h1>Employes contact list</h1>
      {people.map((person) => (
        <ContactCard
          image={person.picture.thumbnail}
          firstName={person.name.first}
          lastName={person.name.last}
          email={person.email}
          phone={person.phone}
        />
      ))}
    </div>
  );
};

export default App;
