import { createContext, useContext, useReducer } from 'react';

import combineReducers from 'react-combine-reducers';

import { fn_set_initial_language } from './helper';

// Actions Const
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

// Actions Creator
const changeLanguage2 = (lang) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang,
  };
};


const initialLanguageState = {
  language: fn_set_initial_language("lang", "en")
};

const initialThemeState = {
  theme: 'dark'
};

function languageReducer(state = initialLanguageState, action) {
  switch (action) {
    case 'CHANGE_LANGUAGE':
      return {
        language: 'ar',
      };
    default:
      return state;
  }
}

function themeReducer(state = initialThemeState, action) {
  switch (action) {
    case 'CHANGE_THEME':
      return {
        theme: 'light',
      };
    default:
      return state;
  }
}

const [reducerCombined, initialStateCombined] = combineReducers({
  reducerLanguage: [languageReducer, initialLanguageState],
  reducerTheme: [themeReducer, initialThemeState],
});


//Language Context Create
const SiteContext = createContext();

//Language Context Functions
function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducerCombined,
    initialStateCombined
  );
  
  return (
    <SiteContext.Provider value={{ state, dispatch }}>
      {children}
    </SiteContext.Provider>
  );
}

function useGetContextState() {
  return useContext(SiteContext);
}

export {
  changeLanguage2,
  ContextProvider,
  useGetContextState
};
