import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.email) errors.email = 'Email обовʼязковий';
  if (!values.password) errors.password = 'Пароль обовʼязковий';
  return errors;
};

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        dispatch(loginThunk(values));
        resetForm();
     
    };

  return (
    <Formik  initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      <Form autoComplete="off" className={styles.form} >
        <div>
          <label className={styles.label}  htmlFor="email">Email</label>
          <Field className={styles.field} type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label className={styles.label} htmlFor="password">Password</label>
          <Field className={styles.field} type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
       <Link className={styles.link} to='/register'>You don't have account? Sign Up!</Link>
        <button className={styles.button} type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
