import css from './ContactList.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/asyncActions';

const Contact = ({name, number, buttonFunc}) => {
    return (
        <div className={css.ContactBox}>
            <div>
                <p><IoPerson /> {name}</p>
                <p><FaPhoneAlt /> {number}</p>
            </div>
            <button className={css.ContactButton} onClick={buttonFunc}>Delete</button>
        </div>
    );
}

const ContactList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name.toLowerCase());
    const filteredContacts = data.filter((contact) => contact.name.toLowerCase().includes(filter));

    return (
        <ul className={css.ContactListBox}>
            {filteredContacts.map((item) => {
                return <li key={item.id}><Contact name={item.name}
                                                  number={item.number}
                                                  buttonFunc={() => dispatch(deleteContact(item.id))}
                /></li>
            })}
        </ul>
    );
}

export default ContactList;