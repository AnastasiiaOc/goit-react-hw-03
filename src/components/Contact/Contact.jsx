

const Contact = ({ id, name, number, deleteContacts }) => {
    return (<ul>
        <li>{name}</li>
        <li>{number}</li>
        <button type='button' onClick={() => deleteContacts(id)}>
            Delete
        </button>
    </ul>)
};

export default Contact;