import React from 'react';
import { Provider } from 'react-redux';
import { TodoList } from 'containers';

import store from './strore';

import './main.css';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
