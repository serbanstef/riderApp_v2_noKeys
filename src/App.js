import 'react-native-gesture-handler';
import * as React from 'react';
import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store/store'

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;