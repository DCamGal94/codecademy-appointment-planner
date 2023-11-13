import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

// Receive three props: 
// * The current list of appointments
// * The current list of contacts
// * A callback function for adding a new appointment
export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  // Keep track of four local state variables, the current name, contact, date, and time entered into the form
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
      {/* In the Add Appointment section, render an AppointmentForm with the following passed via props:
      * local state variables
      * local state variable setter functions
      * handleSubmit callback function */}
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContacts={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* In the Appointments section, render a TileList with the appointment array passed via props */}
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};