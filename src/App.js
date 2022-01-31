import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './consts';
import ClipLoader from 'react-spinners/ClipLoader';
import AppBar from './components/AppBar';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import RegisterPage from './pages/RgisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(phonebookSelectors.getContactsItems);
  const isLoading = useSelector(phonebookSelectors.getLoadingStatus);
  const error = useSelector(phonebookSelectors.getError);

  if (error) {
    alert(error);
  }

  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
        <Route path="/*" element={<Navigate to={ROUTES.REGISTER} replace />} />
      </Routes>
      {/* <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm />

      <h2 className="contactsTitle">Contacts</h2>
      <Filter />
      {contacts.length !== 0 && <ContactList />}
      <div>
        <ClipLoader color={'#000000'} loading={isLoading} size={50} />
      </div> */}
    </div>
  );
};

export default App;
