import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCard } from '../../redux/store';

const Card = props => {

  const dispatch = useDispatch();
  
  const toggle = e => {
    e.preventDefault();
    dispatch(toggleFavoriteCard( props.id))
  }


  return (
    <li className={styles.card}>{props.title}
      <button className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isActive)} onClick={toggle}></button>
    </li>
  );
};

export default Card;