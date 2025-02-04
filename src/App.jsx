import { useState, useEffect } from 'react'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import contactsJson from './components/contacts.json';

// import { nanoid } from "nanoid";

function App (){

  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : contactsJson;
  }); 
// const [contacts, setContacts] = useState(() => {
//   return JSON.parse(localStorage.getItem('contacts')) ?? contactsJson;
// });

  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [newContact, ...prevContacts];
    });
  };

  const deleteContact = (id) => {
   
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id)
    });
  }

const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

const handleFilterChange = (event) => {
  setFilter(event.target.value);
};


return (
<div>
<h1>Phonebook</h1>
<ContactForm onSubmit={addContact} />
<SearchBox value={filter} onChange={handleFilterChange} />
<ContactList contacts={filteredContacts}   onDeleteContact={deleteContact} />
</div>

)
}

export default App;



