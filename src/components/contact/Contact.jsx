import css from './Contact.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Link } from 'react-router-dom';
import DeleteModal from '../deleteModal/DeleteModal';
import { useState } from 'react';
import toast from 'react-hot-toast';


const Contact = ({ contact}) => {
  const dispatch = useDispatch();
  const[isModalOpen, setIsModalOpen] = useState(false);
  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id)).unwrap();
      toast.success(`${contact.name} Delete`);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsModalOpen(false);
    }
  };
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
    return (
      <>
      <div className={css.info}>
        <p><BsFillPersonFill className={css.icon} />
          {contact.name}</p>
        <p><BsFillTelephoneFill className={css.icon} />
          {contact.number}</p>
          </div>
          <div className={css.buttonBox}>
      <button className={css.delete} onClick={handleOpenModal}>Delete</button>
      <Link to={`/contacts/edit/${contact.id}`} className={css.editButton}>Edit</Link>
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        onConfirm={handleDelete}
        onCancel={handleCancel}
      />
    </>
    
    );
  };
  
  export default Contact;