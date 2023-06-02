import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'validEmail',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'Digite uma senha',
  },
};

const useForm = (type) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const emailError = t(types.email.message);

  const validate = useCallback(
    (value) => {
      if (type === false) return true;
      if (value.length === 0) {
        setError(t('errorValue'));
        return false;
      } else if (types[type] && !types[type].regex.test(value)) {
        setError(t(types[type].message));
        return false;
      } else {
        setError(null);
        return true;
      }
    },
    [t, type],
  );

  useEffect(() => {
    validate(value);
  }, [t, validate, value]);

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
