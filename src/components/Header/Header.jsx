import { useContext } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../UserContext';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../Helper/LanguageSelector';

const Header = () => {
  const { data } = useContext(UserContext);
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            {t('login')}
            <LanguageSelector></LanguageSelector>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
