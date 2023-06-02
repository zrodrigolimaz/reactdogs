import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.scss';
import Head from '../Helper/Head';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { t } = useTranslation();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label={t('username')}
          type="text"
          name="username"
          {...username}
        />
        <Input
          label={t('password')}
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>{t('signin')}</Button>
        )}
        <Error error={error && 'Dados incorretos'} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        {t('forgotPassword')}
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>{t('signUp')}</h2>
        <p>{t('notHaveAccount')}</p>
        <Link className={stylesBtn.button} to="/login/criar">
          {t('register')}
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
