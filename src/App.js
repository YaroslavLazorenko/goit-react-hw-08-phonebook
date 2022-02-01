// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './consts';
import AppBar from './components/AppBar';
import RegisterPage from './pages/RgisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
// import { phonebookOperations } from 'redux/phonebook';
import './App.css';

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(phonebookOperations.fetchContacts());
  // }, [dispatch]);

  return (
    <div className="App">
      <AppBar />
      <main>
        <Routes>
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
          <Route path="/*" element={<Navigate to={ROUTES.REGISTER} replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
