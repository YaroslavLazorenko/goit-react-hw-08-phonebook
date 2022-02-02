import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</header>;
};

export default AppBar;
