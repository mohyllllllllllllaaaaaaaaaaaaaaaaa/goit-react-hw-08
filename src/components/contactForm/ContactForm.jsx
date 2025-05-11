import { Formik, Form,Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import  css from './ContactForm.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { selectContacts} from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';


const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().min(5, 'Too short!').max(18, 'Too long!').required('Required'),
  });
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
 

  return (
    <div className={css.section }>
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase())) {
          alert(`${values.name} is already in contacts.`);
          return;
        }
        const newContact = { ...values };
       dispatch(addContact(newContact));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor="name">Name</label>
          <Field className={css.input}
          type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <Field className={css.input}
          type="tel" name="number" id="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit" className={css.add}>Add contact</button>
      </Form>
    </Formik>
    </div>
  );
};

export default ContactForm;