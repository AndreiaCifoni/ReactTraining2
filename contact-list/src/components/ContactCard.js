import React, { useState } from "react";
import "../style.css";

const ContactCard = ({ image, firstName, lastName, email, phone }) => {
  const [showPhone, setShowPhone] = useState(false);

  const onPhone = () => {
    setShowPhone(!showPhone);
  };

  return (
    <div className="container">
      <img className="img" src={image} alt="" />
      <div className="info">
        <p>{firstName + " " + lastName}</p>
        <p>{email}</p>
        <button onClick={onPhone}>Show Phone</button>
        {showPhone ? <p>Phone: {phone}</p> : ""}
      </div>
    </div>
  );
};

export default ContactCard;
