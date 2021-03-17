import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './Reducers/MainReducer'
// import App from './App';
import CreateTodo from './Containers/CreateTodo'
import Table from './Containers/Table'
import registerServiceWorker from 'react-service-worker';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

ReactDOM.render(
  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>
,document.getElementById('root')); registerServiceWorker();