
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";


// ==================================it works====================================


// const ContactList = ({ contacts, onDeleteContact }) => {
   
//     return (<ul className={css.contactListCard}>
//         {contacts.map((contact) => {
//             return (
//                 <Contact
//                     key={contact.id}
//                     name={contact.name}
//                     number={contact.number}
//                     onDeleteContact={() => onDeleteContact({id})}
//                 />);
//         })}
//     </ul>
//     );
// }
    
// export default ContactList;

// ================improved?=====================================================
const ContactList = ({ contacts, onDeleteContact }) => {
   
    return (<ul className={css.contactListCard}>
        {contacts.map((contact) => {
            // return ( <li key={contact.id}>
            return ( 
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDeleteContact={onDeleteContact}
                // /></li>);
                />);
        })}
    </ul>
    );
}
    
export default ContactList;


