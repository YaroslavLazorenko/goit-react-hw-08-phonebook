import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <>
      <p>{email}</p>
      <button type="button">Logout</button>
    </>
  );
};

export default UserMenu;
