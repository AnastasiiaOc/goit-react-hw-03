
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
      // contacts comes from json
    return (<ul className={css.contactListCard}>
        {contacts.map((contact) => {
            return ( 
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDeleteContact={onDeleteContact}
                />);
        })}
    </ul>
    );
}
    
export default ContactList;


