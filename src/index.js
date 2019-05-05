import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from "redux-thunk";
import reduxMulti from "redux-multi";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducer";
import App from './App';

import './css/timeline.css';
import './css/login.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(reduxThunk, reduxMulti)(createStore)(rootReducer, devTools);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
