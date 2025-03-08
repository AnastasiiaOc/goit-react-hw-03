
// import { FaPhone } from "react-icons/fa6";
// import { IoPerson } from "react-icons/io5";
import css from "../Contact/Contact.module.css";

// const Contact = ({ id, name, number, onDeleteContact }) => {
//     return (
//       <div className={css.contact}>
//         <div className={css.cardText}>
//          <p><IoPerson  size="20" />{name}</p>
//          <p><FaPhone  size="20" />{number}</p>
//         </div>
//         <button
//           onClick={() => onDeleteContact(id)}
//           type="button"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   };
  
//   export default Contact;

export default function Contact({id, name, number, onDeleteContact}){
    return(
        <div className={css.contact}>
            <div className={css.cardText}>
            <p>{name}</p>
            <p>{number}</p>
            </div>
        
            <button type="button" onClick = {() =>onDeleteContact(id)}>Delete</button>
        </div>
    )

}