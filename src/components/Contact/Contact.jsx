
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "../Contact/Contact.module.css";


export default function Contact({id, name, number, onDeleteContact}){
    return(
        <div className={css.contact}>
            <div className={css.cardText}>
            <p><IoPerson className={css.icon} size="20" />{name}</p>
            <p><FaPhone className={css.icon} size="20" />{number}</p>
            </div>
        
            <button type="button" className={css.contactBtn} onClick = {() =>onDeleteContact(id)}>Delete</button>
        </div>
    )

}