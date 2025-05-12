import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegistrationPage ';
import ContactsPage from './pages/ContactsPage';
import NotFound from './pages/NotFoundPage';
import Layout from './components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import PrivateRoute from './components/PrivateRoute';
import ResttrictedRoute from './components/RestrictedRoute';
import  EditForm  from './components/editForm/EditForm';
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
     <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/> }/>
      <Route path='/login' element={<ResttrictedRoute component={<Login/>} redirectTo='/contacts' />}/>
      <Route path='/register' element={<Register/> }/>
       <Route path="/contacts/edit/:contactId" element={<EditForm />} />
      <Route path='contacts' element={
      <PrivateRoute>
      <ContactsPage/>
      </PrivateRoute>} />
      <Route path='*' element={<NotFound/> }/>
      </Route>
    </Routes>
    </>
  );
}
export default App;
