import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './consts';
import { authOperations } from 'redux/auth';
import AppBar from './components/AppBar';
import RegisterPage from './pages/RgisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
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
          <Route
            path={ROUTES.REGISTER}
            element={
              <PublicRoute redirectTo={ROUTES.CONTACTS} restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute redirectTo={ROUTES.CONTACTS} restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.CONTACTS}
            element={
              <PrivateRoute redirectTo={ROUTES.LOGIN}>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
