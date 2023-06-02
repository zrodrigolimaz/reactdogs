import { useState, useEffect } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle(t('postYourPhoto'));
        break;
      case '/conta/estatisticas':
        setTitle(t('statistics'));
        break;
      default:
        setTitle(t('myAccount'));
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
