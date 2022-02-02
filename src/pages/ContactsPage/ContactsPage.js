import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { SPINNER } from 'consts';
import { phonebookSelectors } from 'redux/phonebook';
import { phonebookOperations } from 'redux/phonebook';

const ContactsPage = () => {
  const contacts = useSelector(phonebookSelectors.getContactsItems);
  const isLoading = useSelector(phonebookSelectors.getLoadingStatus);
  const error = useSelector(phonebookSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  if (error) {
    alert(error);
  }

  return (
    <>
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm />

      <h2 className="contactsTitle">Contacts</h2>
      <Filter />
      {contacts.length !== 0 && <ContactList />}
      <div>
        <ClipLoader color={SPINNER.COLOR} loading={isLoading} size={SPINNER.SIZE} />
      </div>
    </>
  );
};

export default ContactsPage;
