import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import SearchBox from "../components/searchBox/SearchBox";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectLoading } from "../redux/contacts/selectors";

const ContactsPage = () => {
    const dispatch = useDispatch();
 const error = useSelector(selectError);
const loading = useSelector(selectLoading);
 useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch]);
    return(
        <div>
            <main>
            <ContactForm/>
            <SearchBox/>
            {loading && <p>Loading ...</p>}
            {error && <p>Something went wrong!</p>}
            {!loading && !error && <ContactList  />}
            </main>
        </div>
    );
};
export default ContactsPage;