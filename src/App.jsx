import { useState, useEffect } from 'react'
// import React from 'react';
import './App.css'
import ContactList from './components/ContactList/ContactList';
// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
import contactsJson from './components/contacts.json';
import Contact from './components/Contact/Contact';



function App() {
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) )
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : contactsJson;
  }); 

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);


  // const addContact = (contact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, contact];
  //   });
  // };
  // const updateFeedback = () => {
  //   setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });

  // const deleteContacts = (id) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== id)
  //   });
  // }

  // const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
    </div>)
}
export default App;

// return (
//   <div>
//     <h1>Phonebook</h1>
//     <ContactForm onSubmit={addContact} />
//     <SearchBox value={filter} setFilter={setFilter} />
//     <ContactList contacts={filteredContacts} deleteContacts={deleteContacts} />
//   </div>

// )