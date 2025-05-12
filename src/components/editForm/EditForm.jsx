import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeContact } from '../../redux/contacts/operations';  
import styles from './EditForm.module.css';


const EditForm = ({contact, onClose}) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.contacts.error);
  const loading = useSelector((state) => state.contacts.loading);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  useEffect(() => {
   setName(contact.name);
   setNumber(contact.number);
  }, [contact]);

  const handleSubmit =  (e) => {
    e.preventDefault();
    const updatedContact = {
      id: contact.id,
      name,
      number,
    };
    
    dispatch(changeContact(updatedContact));
    onClose();
  };

  return (
    <div className={styles.backdrop}>
    <form   className={styles.form} onSubmit={handleSubmit}>
      <h2>Edit Contact</h2>
      <div>
        <label htmlFor="name"className={styles.label}>Name</label>
        <input className={styles.field}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="number"className={styles.label}>Phone</label>
        <input className={styles.field}
          type="tel"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
      <button type="button" className={styles.cancel} onClick={onClose}>
          Cancel
        </button>
      {error && <p>{error}</p>}
    </form>
    </div>
  );
};

export default EditForm;



