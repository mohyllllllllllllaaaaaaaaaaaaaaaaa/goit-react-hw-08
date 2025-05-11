import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeContact } from '../../redux/contacts/operations'; 
import { useNavigate, useParams} from 'react-router-dom'; 

const EditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactId } = useParams();
  const { contacts, loading, error } = useSelector((state) => state.contacts);

  const contactToEdit = Array.isArray(contacts) ? contacts.find(contact => contact.id === contactId) : null;
 
  const [name, setName] = useState(contactToEdit ? contactToEdit.name : '');
  const [phone, setPhone] = useState(contactToEdit ? contactToEdit.phone : '');


  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = {
      id: contactId,
      name,
      phone,
    };
    dispatch(changeContact(updatedContact));
    navigate('/contacts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Contact</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default EditForm;