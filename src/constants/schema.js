import * as yup from 'yup';

import i18n from '../locales/i18next';

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t('pages.login.emailError'))
    .required(i18n.t('pages.login.emailRequired')),
  password: yup.string().required(i18n.t('pages.login.passwordRequired')),
});
