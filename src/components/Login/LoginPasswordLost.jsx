import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../Api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import { useTranslation } from 'react-i18next';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  const { t } = useTranslation();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="perdeu a senha" />
      <h1 className="title">{t('forgotPassword')}</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label={t('email/user')} type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>{t('sending...')}</Button>
          ) : (
            <Button>{t('sendEmail')}</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
