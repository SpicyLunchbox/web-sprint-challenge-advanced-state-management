import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import "./index.css";
import App from "./App";
import thunk from 'redux-thunk';

const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducer, applyMiddleware(thunk));//creates store for the state tree and allows for async calls to be used within actions

const rootElement = document.getElementById("root");

ReactDOM.render(
    //provides state to the App
<Provider store={store}>
    <App />
</Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods. done
//2. Create a store that includes thunk and logger middleware support. done
//3. Wrap the App component in a react-redux Provider element. done