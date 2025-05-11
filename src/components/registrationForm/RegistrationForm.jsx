import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';


const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Імʼя обовʼязкове';
    if (!values.email) errors.email = 'Email обовʼязковий';
    if (!values.password) errors.password = 'Пароль обовʼязковий';
    return errors;
  };
  const handeleSubmit = (values, {resetForm}) =>{
    dispatch(registerThunk(values));
    resetForm();
  }
  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handeleSubmit}>
      <Form autoComplete='off' className={styles.form}>
        <div>
          <label htmlFor="name" className={styles.label}>Name</label>
          <Field type="text" name="name"  className={styles.field} />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email" className={styles.label}>Email</label>
          <Field type="email" name="email"  className={styles.field} />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password" className={styles.label}>Password</label>
          <Field type="password" name="password"  className={styles.field} />
          <ErrorMessage name="password" component="div" />
        </div>
       <Link to='/login' className={styles.link} >You already have account?Sign In!</Link>
        <button type="submit" className={styles.button} >Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
