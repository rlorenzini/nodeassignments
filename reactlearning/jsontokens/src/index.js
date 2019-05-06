import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login'
import Register from './components/Register'
import BaseLayout from './components/BaseLayout'
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const store = createStore(reducer,devToolsEnhancer(
  // Specify custom devTools options
));

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<BaseLayout>
<Switch>
<Route path='/' exact component={App}/>
<Route path='/login-page' component={Login}/>
<Route path='/register' component={Register}/>
</Switch>
</BaseLayout>
</Provider>
</BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
