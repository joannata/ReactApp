import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

  const phrase = useSelector(state => state.searchString)

  const [searchString, setSearchString] = useState(phrase || '');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  useEffect(() => {
    return () => {
    dispatch(updateSearchString(''));
    }
  }, []);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;