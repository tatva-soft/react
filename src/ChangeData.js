import { changeLanguage2, useLanguageState } from './Contexts';

const ChangeData = () => {
  
  const { language, dispatch } = useLanguageState();
  function handleSetLanguage(lng) {
    if (lng !== language.language) {
      dispatch(changeLanguage2(lng))
    }
  }
  // console.log(language);
  return (
    <div>
      <span
        className={`setLanguage ${language.language === 'en' ? 'active' : ''}`}
        onClick={() => handleSetLanguage('en')}>
        English
      </span>
      <span
        className={`setLanguage ${language.language === 'fa' ? 'active' : ''}`}
        onClick={() => handleSetLanguage('fa')}>
        Persian
      </span>
    </div>
  );
};

export default ChangeData;
