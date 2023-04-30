import React from 'react';
import './styles.css';
import { useLanguageState } from './Contexts';
import { useTranslation } from 'react-i18next';

const ShowThemeName = () => {
  //old
  console.log('<ShowThemeName /> rerender.');
  const [__] = useTranslation();
  const { language } = useLanguageState();
  return (
    <div>
      {/* old */}
      <div>
        theme name: <span className="h1">{language.theme}</span>
      </div>
    </div>
  );
};

export default ShowThemeName;
