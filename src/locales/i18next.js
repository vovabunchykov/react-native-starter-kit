import i18next from 'i18next';
import resources from './languages';

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: 'eng',
  resources,
});

export default i18next;
