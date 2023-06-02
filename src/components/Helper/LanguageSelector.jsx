import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={changeLanguage}>
      <option value="pt">Portugues</option>
      <option value="en">Ingles</option>
    </select>
  );
};

export default LanguageSelector;
