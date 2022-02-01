import { NavLink } from 'react-router-dom';
import { ROUTES } from 'consts';

const AuthNav = () => {
  return (
    <>
      <NavLink to={ROUTES.REGISTER}>Sign Up</NavLink>
      <NavLink to={ROUTES.LOGIN}>Login</NavLink>
    </>
  );
};

export default AuthNav;
