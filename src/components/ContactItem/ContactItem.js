import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(phonebookSelectors.getLoadingStatus);

  return (
    <li className={styles.contactItem}>
      <span className={styles.contactText}>
        {contact.name}: {contact.number}
      </span>
      <button
        className={styles.button}
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
