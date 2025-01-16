import Contact from "../Contact/Contact";



const ContactList = ({ contacts}) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <Contact
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                    />
                );
            })}
        </ul>

    );
};




export default ContactList;