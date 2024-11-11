import css from "../components/ContactList.module.css";
import { selectContacts, selectFilter } from "../redux/selectors";
import Contacts from "./Contacts";
import { useSelector } from 'react-redux';

const ContactList = () => {
    const listContacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter); 
    
console.log(listContacts)

const filteredContact = listContacts.filter((contact) => contact.username.toLowerCase().includes(filter.toLowerCase()));

    return (
      <ul className={css.list}>
        {filteredContact.map((contact) => (
          <li key={contact.id} className={css.listItem}>
            <Contacts contact={contact}  />
          </li>
        ))}
      </ul>
    );
  };

  export default ContactList;