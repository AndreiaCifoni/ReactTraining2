import React from "react";

const ContactCard = ({ image, firstName, lastName, email, phone }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{firstName + " " + lastName}</p>
      <p>{email}</p>
      <button>Show Phone</button>
    </div>
  );
};

export default ContactCard;
