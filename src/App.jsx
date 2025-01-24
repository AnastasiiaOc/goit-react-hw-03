import { useState, useEffect } from 'react'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import contactsJson from './components/contacts.json';
import { nanoid } from "nanoid";





function App (){

  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : contactsJson;
  }); 

  const [filter, setFilter] = useState('');

  // const addContact = (contact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, contact];
  //   });
  // };

  const addContact = ({ name, number }) => {
    console.log(name, number)
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [ ...prevContacts, newContact]);
  };
  
  const deleteContact = (id) => {
    console.log("hello")
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id)
    });
  }

const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

const handleFilterChange = (event) => {
  setFilter(event.target.value);
};

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

return (
<div>
<h1>Phonebook</h1>
<ContactForm onSubmit={addContact} />
{/* <SearchBox/> */}
{/* <SearchBox value={filter} onChange={handleFilterChange} /> */}
<SearchBox onChange={handleFilterChange} />
{/* <SearchBox value={filter} setFilter={setFilter} /> */}
<ContactList contacts={filteredContacts}   onDeleteContact={deleteContact} />
{/* <ContactForm onSubmit={addContact} /> */}
{/* <SearchBox/> */}
{/* <ContactList /> */}
</div>

)
}

export default App;



// ========================boy's======================================
// const getInitialValues = () => {
//   const savedValues = window.localStorage.getItem("my-contacts");
//   return savedValues !== null ? JSON.parse(savedValues) : contactsJson;
// };

// const App = () => {
//   const [contacts, setContacts] = useState(getInitialValues);
//   const [filter, setFilter] = useState("");

//   const addContact = ({ name, number }) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     setContacts((prevContacts) => [newContact, ...prevContacts]);
//   };

//   const deleteContact = (id) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== id)
//     );
//   };

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };
// // ================here a problem?++++++++++++++++++++++
//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   useEffect(() => {
//     window.localStorage.setItem("my-contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div>
//       <h1>
//         Phonebook 
//       </h1>
//       <ContactForm onSubmit={addContact} />
//       <SearchBox value={filter} onChange={handleFilterChange} />
//       <ContactList
//         contacts={getFilteredContacts()}
//         onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// };

// export default App;
