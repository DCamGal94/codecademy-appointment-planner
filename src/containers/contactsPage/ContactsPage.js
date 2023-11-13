import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [newContact, setNewContact] = useState({name: "", phone: "", email: ""});
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(newContact);
      setNewContact({name: "", phone: "", email: ""});
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const duplicateContact = contacts.find(contact => contact.name === newContact.name);
    if (duplicateContact !== undefined) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [newContact, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          newContact={newContact}
          setNewContact={setNewContact}
          duplicate={duplicate}
          setDuplicate={setDuplicate}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
