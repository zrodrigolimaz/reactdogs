import { useContext } from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import { useTranslation } from 'react-i18next';

const LoginCreate = () => {
  const { t } = useTranslation();
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="crie sua conta" />
      <h1 className="title">{t('getStarted')}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={t('username')}
          type="text"
          name="username"
          {...username}
        />
        <Input label={t('email')} type="email" name="email" {...email} />
        <Input
          label={t('password')}
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>{t('register')}</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
