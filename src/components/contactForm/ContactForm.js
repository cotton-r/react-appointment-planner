import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>
      <br/>
      <label>
        <input 
          type="tel" 
          name="phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
          required
          // regex is for UK phone numbers
          pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$"
          placeholder="Contact Phone (##### ######)"
        />
      </label>
      <br/>
      <label>
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email Address"
        />
      </label>
      <br/>
      <input type="submit" value="Add Contact" />
    </form>
  );
};
