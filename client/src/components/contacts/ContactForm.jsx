import React, { useContext, useState, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

function ContactForm() {
  const contactContext = useContext(ContactContext);

  useEffect(() => {
    if (contactContext.current !== null) {
      setContact(contactContext.current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, contactContext.current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onchange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(contactContext.current === null) {
        contactContext.addContact(contact);
    } else {
        contactContext.updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
      contactContext.clearCurrent();
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {contactContext.current ? "Edit Contacts" : "Add Contact"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onchange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onchange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={onchange}
      />
      <h5>Contact Type</h5>
      <input
        onChange={onchange}
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
      />{" "}
      Personal{" "}
      <input
        onChange={onchange}
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
      />{" "}
      Professional{" "}
      <div>
        <input
          type="submit"
          value={contactContext.current?"Edit Contact":"Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {contactContext.current&&<div>
        <button onClick={clearAll} className="btn btn-light btn-block">Clear</button>    
      </div>}
    </form>
  );
}

export default ContactForm;
