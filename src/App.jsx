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


  // const addContact = (contact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, contact];
  //   });
  // }

  // ==============================my last today==================

  // const addContact = ({ name, number }) => {
  //   console.log(name, number)
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   setContacts((prevContacts) => [newContact,...prevContacts]);
  // };

  // =============================================================
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [newContact, ...prevContacts];
    });
  };
  //   const addContact = contact => {
  //   const newContact = {
  //     ...contact,
  //     id: nanoid(),
  //   };

  //   setContacts([newContact, ...contacts]);
  // };

  
  const deleteContact = (id) => {
   
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id)
    });
  }

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(item => item.id !== contactId));
  // };



const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

const handleFilterChange = (event) => {
  setFilter(event.target.value);
};

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
// }, [contacts]);

return (
<div>
<h1>Phonebook</h1>
{/* <ContactForm onSubmit={addContact} /> */}
<ContactForm onSubmit={addContact} />
{/* <SearchBox/> */}
<SearchBox value={filter} onChange={handleFilterChange} />
{/* <SearchBox
        filterValue={filterValue}
        onFilterChange={handleFilterChange}
      /> */}
{/* <SearchBox onChange={handleFilterChange} /> */}
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
// 

// function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) || initialContacts;
  // });
  // const [filterValue, setFilterValue] = useState('');


  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

//   const handleFilterChange = event => {
//     setFilterValue(event.target.value);
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterValue.toLowerCase()),
//   );

//   const onAddContact = contact => {
//     const finalContact = {
//       ...contact,
//       id: nanoid(),
//     };

//     setContacts([finalContact, ...contacts]);
//   };

//   const onDeleteContact = contactId => {
//     setContacts(contacts.filter(item => item.id !== contactId));
//   };



 // pppppppppppppppppppppppppppppNOT COMPAREDpppppppppppppppppp

//   // const handleClick = contactName => {
//   //   console.log('name: ', contactName);
//   // };



//   return (
//     <>
//       <h1 className="title">Phonebook</h1>
//       <ContactForm onAddContact={onAddContact} />
//       <SearchBox
//         filterValue={filterValue}
//         onFilterChange={handleFilterChange}
//       />
//       <ContactList
//         contacts={filteredContacts}
//         onDeleteContact={onDeleteContact}
//       />
//     </>
//   );
// }

// export default App;