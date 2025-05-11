import css from './Contact.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Link } from 'react-router-dom';


const Contact = ({ contact}) => {
  const dispatch = useDispatch();
    return (
      <>
      <div className={css.info}>
        <p><BsFillPersonFill className={css.icon} />
          {contact.name}</p>
        <p><BsFillTelephoneFill className={css.icon} />
          {contact.number}</p>
      </div>
      <button className={css.delete} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
      <Link to={`/contacts/edit/${contact.id}`} className={css.editButton}>Edit</Link>
    </>
    
    );
  };
  
  export default Contact;