import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const { name, phone, email } = props.newContact;

  const handleChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div>
      
    </div>
  );
};

