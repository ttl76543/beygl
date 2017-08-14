/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';

import enTranslationMessages from './translations/en.json';
import esTranslationMessages from './translations/es.json';

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

export const appLocales = [
  'en',
  'es',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== 'en'
    ? formatTranslationMessages('en', enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== 'en'
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
};
