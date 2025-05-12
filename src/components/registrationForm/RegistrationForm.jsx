import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';
import * as Yup from 'yup';
import toast from 'react-hot-toast';


const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(20, 'Too long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email format') 
      .min(5, 'Too short!')
      .max(28, 'Too long!')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Too short!')
      .max(18, 'Too long!')
      .required('Required'),
  });

  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handeleSubmit = async (values, { resetForm }) => {
    const resultAction = await dispatch(registerThunk(values));
    if (registerThunk.fulfilled.match(resultAction)) {
      toast.success(' Registration successful!');
      resetForm();
    } else {
      toast.error(resultAction.payload || ' Something went wrong during registration.');
    }
  };
  return (
    <Formik initialValues={initialValues}  validationSchema={validationSchema} onSubmit={handeleSubmit}>
      <Form autoComplete='off' className={styles.form}>
        <div>
          <label htmlFor="name" className={styles.label}>Name</label>
          <Field type="text" name="name" id="name" className={styles.field} />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email" className={styles.label}>Email</label>
          <Field type="email" name="email" id="email"  className={styles.field} />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password" className={styles.label}>Password</label>
          <Field type="password" name="password" id="password"  className={styles.field} />
          <ErrorMessage name="password" component="div" />
        </div>
       <Link to='/login' className={styles.link} >You already have account?Sign In!</Link>
        <button type="submit" className={styles.button} >Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
