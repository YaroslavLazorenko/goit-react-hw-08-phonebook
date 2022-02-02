import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logout());
  };

  return (
    <>
      <p>Hello, {userName}</p>
      <p>{userEmail}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
