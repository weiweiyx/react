import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route ,hashHistory } from 'react-router-dom'
import NotFound from './containers/404'
import configureStore from './store/configureStore'
import App from './router/routeMap'

// 创建 Redux 的 store 对象
const store = configureStore();


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
