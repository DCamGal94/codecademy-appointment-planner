import React, { useState } from "react"; // Add { useState } to the 'react' import statement
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "../root/Root";
import { AppointmentsPage } from "../../containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  // Create empty arrays for contacts and appointments using useState([])
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addAppointment = (name, contact, date, time) => {
    setAppointments([
      ...appointments, 
      {
        name: name,
        contact: contact, 
        date: date, 
        time: time,
      },
    ]);
  }; // Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments
  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts, 
      {
        name: name,
        phone: phone, 
        email: email,
      },
    ]);
  }; // Define a callback function that, given a title, phone number, and email, adds a new contact object with that data to the array of contacts

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
