import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';

import store from './store';
import i18n from './locales/i18next';
import Navigation from './Navigation';
import Network from './components/Network';

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Network>
          <Navigation />
        </Network>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
