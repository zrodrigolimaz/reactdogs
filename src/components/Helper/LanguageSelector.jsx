import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { GiUsaFlag, GiBrazil } from 'react-icons/gi';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Select = styled.select`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease;
  background: transparent;
  color: #333;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    background: #e8b549;
    color: #333333;
    & option {
      background-color: #333333;
      color: #fff;
    }
  }
`;

const Option = styled.option`
  background-color: #f2f2f2;
`;

const Icon = styled.span`
  font-size: 26px;
  margin-left: 12px;
  vertical-align: middle;
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="animeLeft">
      <Select onChange={changeLanguage} className="animeLeft fade-in">
        <Option value="pt">Português</Option>
        <Option value="en">English</Option>
      </Select>
      <Icon>{i18n.language === 'pt' ? <GiBrazil /> : <GiUsaFlag />}</Icon>
    </div>
  );
};

export default LanguageSelector;
