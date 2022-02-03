import { useSelector, useDispatch } from 'react-redux';
import { phonebookActions } from 'redux/phonebook';
import { phonebookSelectors } from 'redux/phonebook';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(phonebookSelectors.getContactsFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={styles.title}>Find contacts by name</p>
      <input
        className={styles.inputField}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filter}
        onChange={e => dispatch(phonebookActions.changeFilter(e.target.value))}
      ></input>
    </>
  );
};

export default Filter;
