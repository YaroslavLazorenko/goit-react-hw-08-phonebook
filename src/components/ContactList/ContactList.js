import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { phonebookSelectors } from 'redux/phonebook';
import s from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(phonebookSelectors.getFilteredContactsItems);

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => {
        return <ContactItem contact={contact} key={contact.name} />;
      })}
    </ul>
  );
};

export default ContactList;
