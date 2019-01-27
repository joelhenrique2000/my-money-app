import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './main/reducers'
import promise from 'redux-promise'

const store = applyMiddleware(promise)(createStore)(Reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#app'))