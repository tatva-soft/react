import i18n from './translate';

function fn_set_initial_language(key, lang) {
  let storageLang;
  // Get from local storage by key
  const item = window.localStorage.getItem(key);
  if (item) {
    storageLang = item;
    i18n.changeLanguage(item);
  } else {
    window.localStorage.setItem(key, lang);
    i18n.changeLanguage(key);
  }
  return storageLang;
}

function fn_set_local_storage(key, value) {
  window.localStorage.setItem(key, value);
}

export { fn_set_initial_language, fn_set_local_storage };
