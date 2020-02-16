export const setLocale = (locale: string) =>
  window.localStorage.setItem(
    'PIPELINE_LOCALE',
    (locale || '').match(/(ko-kr|ja-jp|en)/i) ? locale : 'en'
  );

export const getLocale = () =>
  window.localStorage.getItem('PIPELINE_LOCALE') || 'ko-KR';

export const setStorage = (key: string, value: string) =>
  window.localStorage.setItem(key, value);

export const getStorage = key => window.localStorage.getItem(key);

export const removeStorage = key => window.localStorage.removeItem(key);
