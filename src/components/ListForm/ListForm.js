import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store.js';
import Button from './../Button/Button';

const ListForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  };

	return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /> 
      Description: <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
	);
};

export default ListForm;