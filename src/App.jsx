import './App.css'
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/contactsSlice';
import { FaAddressCard } from "react-icons/fa";

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
const loading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch]);
  return (
    <div>
      <header><h1>Phonebook<FaAddressCard className='icon'/></h1></header>
      <ContactForm />
      <SearchBox  />
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wrong!</p>}
      {!loading && !error && <ContactList  />}
      
    </div>
  );
}
export default App;
