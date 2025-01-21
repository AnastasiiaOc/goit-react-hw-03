/* eslint-disable react/prop-types */
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "../Contact/Contact.module.css";
// import contactsJson from './components/contacts.json';
// export default Contact;
// {
//     "id": "id-1",
//         "name": "Rosie Simpson",
//             "number": "459-12-56"
// },

// export default function Contact({ data: { id, name, number }, onDelete }) {
//     return (
//      <div>
//             <p><IoPerson size="20" />{number}</p>
//             <p><FaPhone size="20" />{name}</p>
//             <button type="button" onClick={() => onDelete(id)}>Delete</button>


//      </div>

//         )
// }

export default function Contact({ id, name, number, onDelete}) {
   return (
        <div className={css.contact} >
            <div className={css.cardText}>
                <p><IoPerson size="20" />{number}</p>
                <p><FaPhone size="20" />{name}</p>
            </div>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
};

// export default Contact;

