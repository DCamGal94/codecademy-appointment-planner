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
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    setContacts([...contacts, {name, phone, email}]);
  }; // Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts

  const addAppointment = (title, contact, date, time) => {
    setAppointments([...appointments, {title, contact, date, time}]);
  }; // Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
