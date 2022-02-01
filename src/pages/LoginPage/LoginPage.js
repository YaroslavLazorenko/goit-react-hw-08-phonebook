import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const INITIAL_FORM_LOCAL_STATE = { email: '', password: '' };

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error('Unknown input field name');
    }
  };

  const resetForm = () => {
    setEmail(INITIAL_FORM_LOCAL_STATE.email);
    setPassword(INITIAL_FORM_LOCAL_STATE.password);
  };

  const loginUser = (email, password) => {
    dispatch(authOperations.login({ email, password }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    loginUser(email, password);
    resetForm();
  };

  return (
    <>
      <h1>Login</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          title="Must contain valid email address"
          required
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one uppercase and lowercase letter, and at least 8 or more characters"
          required
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
