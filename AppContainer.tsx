import React, {useEffect} from 'react';
import App from './App';
import store from './src/store/store';
import {Provider as StoreProvider} from 'react-redux';
import {GoogleSignin} from 'react-native-google-login';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/store/store';

const AppContainer = function () {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '830365779155-bgh3c2lik69os37s9con6duhbsosklq7.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      //react native config
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
};

export default AppContainer;
