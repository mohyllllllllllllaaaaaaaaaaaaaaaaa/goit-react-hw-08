import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";


const ContactList = ({onEdit}) => {
const contacts = useSelector(selectFilteredContacts);

  return (
      <ul className={css.list}>
        {contacts.map(contact => (
           <li key={contact.id} className={css.item}>
          <Contact contact={contact} onEdit={onEdit}/>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ContactList;