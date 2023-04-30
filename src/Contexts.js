import { createContext, useContext, useReducer } from 'react';

import i18n from './translate';

import { fn_set_initial_language, fn_set_local_storage } from './helper';

// Actions Const
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

// Actions Creator
const changeLanguage2 = (lang) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang,
  };
};

const InitialLanguageState = {
  language: fn_set_initial_language('lang', 'en'),
  theme: 'dark',
};

//Language Context Create
const languageContext = createContext();

//Language Context Functions
function LanguageProvider({ children }) {
  const [lang, dispatch] = useReducer(useLanguageReducer, InitialLanguageState);
  const language = lang;
  return (
    <languageContext.Provider value={{ language, dispatch }}>
      {children}
    </languageContext.Provider>
  );
}

function useLanguageState() {
  return useContext(languageContext);
}

function useLanguageReducer(state, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload).then(() => {
        fn_set_local_storage('lang', action.payload);
      });
      return {
        language: action.payload,
      };
    default:
      return state;
  }
}

export {
  changeLanguage2,
  LanguageProvider,
  useLanguageState,
  useLanguageReducer,
};
