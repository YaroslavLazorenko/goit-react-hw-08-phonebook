import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './consts';
import AppBar from './components/AppBar';
import RegisterPage from './pages/RgisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import { authOperations } from 'redux/auth';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar />
      <main>
        <Routes>
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage />} replace />
          <Route path="/*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
