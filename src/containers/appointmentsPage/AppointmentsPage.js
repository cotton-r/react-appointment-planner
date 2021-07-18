import React, { useState } from "react";

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [contact, setContact] = useState(contacts.length > 0 ? contacts[0].name : "");
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(currentTitle, contact, date, time);

    setCurrentTitle('');
    setContact('');
    setDate('');
    setTime('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          currentTitle={currentTitle}
          setCurrentTitle={setCurrentTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          tiles={appointments}
        />
      </section>
    </div>
  );
};
