import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navBar}>
          <a href ="/"><span className={'fa fa-tasks'} /></a>
          <ul className={styles.navlist}>
            <li className={styles.navlink}><a href="/">HOME</a></li>
            <li className={styles.navlink}><a href="/favorite">FAVORITE</a></li>
            <li className={styles.navlink}><a href="/about">ABOUT</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar;