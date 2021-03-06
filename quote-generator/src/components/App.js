import React, { useState } from "react";
import axios from "axios";
import "../style.css";

const App = () => {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const response = await axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setQuote(response.data.slip.advice);
        console.log(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onQuote = () => {
    getQuote();
  };

  return (
    <div className="container">
      <div className="card">
        <p className="text">{quote}</p>
        <button onClick={onQuote} className="btn">
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
