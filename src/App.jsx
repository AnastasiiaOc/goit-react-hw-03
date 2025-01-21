import { useState, useEffect } from 'react'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import contactsJson from './components/contacts.json';
import { nanoid } from "nanoid";


// const getInitialValues = () => {
//   const savedValues = window.localStorage.getItem("my-contacts");
//   return savedValues !== null ? JSON.parse(savedValues) : contactsJson;
 
// };

// export default function App() {
//   const [contacts, setContacts] = useState(getInitialValues);
//   const [filter, setFilter] = useState("");
 
//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   useEffect(() => {
//     window.localStorage.setItem("my-contacts", JSON.stringify(contacts));
//   }, [contacts]);
 
//   const addContact = ({ name, number }) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     setContacts((prevContacts) => [newContact, ...prevContacts]);
//   }


//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList contacts={getFilteredContacts()} />
//     </div>
    
//   )
// }
const getInitialValues = () => {
  const savedValues = window.localStorage.getItem("my-contacts");
  return savedValues !== null ? JSON.parse(savedValues) : contactsJson;
};

const App = () => {
  const [contacts, setContacts] = useState(getInitialValues);
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };
  useEffect(() => {
    window.localStorage.setItem("my-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

 

  return (
    <div>
      <h1 >
        Phonebook 
      </h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;




