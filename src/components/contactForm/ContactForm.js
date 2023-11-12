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
  // const { name, phone, email } = props.newContact;

  // const handleChange = (e) => {
  //   setNewContact({
  //     ...newContact,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        value={name}
        onChange={setName} // handleChange
        required
      />
      <input 
        type="tel"
        name="phone"
        value={phone}
        onChange={setPhone} // handleChange
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        required
      />
      <input 
        type="email"
        name="email"
        value={email}
        onChange={setEmail} // handleChange
        required
      />
      <input 
        type="submit"
        value="Add Contact" 
      />
    </form>
  );
};

