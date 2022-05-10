import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <p className={styles.subtitle}>There are your favorite cards: </p>
    </div>
  )
}

export default Favorite;