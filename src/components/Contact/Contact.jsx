
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "../Contact/Contact.module.css";
// export default function Contact({ id, name, number, onDelete}) {
  
//    return (
//         <div className={css.contact} >
//             <div className={css.cardText}>
//                 <p><IoPerson size="20" />{name}</p>
//                 <p><FaPhone size="20" />{number}</p>
//             </div>
//             <button type="button" onClick={() => onDelete(id)}>Delete</button>
//              {/* <button type="button">Delete</button> */}
//         </div>
//     )
// };

// ====================================================================

// ===========================girls=============================
const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
      <div className={css.contact}>
        <div className={css.cardText}>
        <p><IoPerson size="20" />{name}</p>
         <p><FaPhone size="20" />{number}</p>
        </div>
        <button
          onClick={() => onDeleteContact(id)}
          type="button"
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default Contact;