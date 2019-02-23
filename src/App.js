import React, { Component } from 'react';
import './App.css';
import Persons from './containers/Persons';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <h1>Aplicación usando Redux</h1>
      <div className="App">
        <Persons />
      </div>
      </Provider>
    );
  }
}

export default App;
