import styles from './Footer.module.scss';
import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>{t('rightsReserved')}</p>
    </footer>
  );
};

export default Footer;
