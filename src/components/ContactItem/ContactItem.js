import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import s from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(phonebookSelectors.getLoadingStatus);

  return (
    <li className={s.contactItem}>
      <span className={s.contactText}>
        {contact.name}: {contact.number}
      </span>
      <button
        className={s.button}
        onClick={() => dispatch(phonebookOperations.deleteContact(contact.id))}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
