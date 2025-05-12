import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import SearchBox from "../components/searchBox/SearchBox";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import EditForm from "../components/editForm/EditForm";

const ContactsPage = () => {
    const dispatch = useDispatch();
 const error = useSelector(selectError);
const loading = useSelector(selectLoading);
const [editContact, setEditContact] = useState(null);

 useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch]);

const handleEdit = (contact) => {
setEditContact(contact);
};
const handleCloseEdit = () => {
    setEditContact(null);
};
    return(
        <div>
            <main>
                <ContactForm/>
                 <SearchBox/>
            {loading && <p>Loading ...</p>}
            {error && <p>Something went wrong!</p>}
            {!loading && !error && <ContactList  onEdit={handleEdit} />}
            {editContact && (
                <EditForm contact={editContact}  onClose={handleCloseEdit} />
            )}
            </main>
        </div>
    );
};
export default ContactsPage;