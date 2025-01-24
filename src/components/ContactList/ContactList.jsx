
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// {
//     "id": "id-1",
//         "name": "Rosie Simpson",
// },

// ==================================it works====================================

// const ContactList = ({ contacts }) => {
const ContactList = ({ contacts, onDeleteContact }) => {
   
    return (<ul className={css.contactListCard}>
        {contacts.map((contact) => {
            return (
                <Contact
                    key={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDelete={() => onDeleteContact({id})}
                />);
        })}
    </ul>
    );
}
    
export default ContactList;

// ================BOYS============================================================


// const ContactList = ({ contacts, onDeleteContact }) => (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <Contact
//           key={id}
//           name={name}
//           number={number}
//           onDelete={() => onDeleteContact(id)}
//         />
//       ))}
//     </ul>
//   );
  
//   export default ContactList;