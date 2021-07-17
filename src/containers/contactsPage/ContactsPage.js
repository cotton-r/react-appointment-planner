import React, {useState, useEffect} from "react";
import ContactForm from '.../components/ContactForm/ContactForm';
import TileList from '.../components/tileList/TileList';
import { ProgressPlugin } from "webpack";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };
    
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found) {
        return true
      } 
      return false;
    };

    if (nameIsDuplicate) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [name, contacts, isDuplicate]);



  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
