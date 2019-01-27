import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './main/reducers'

const store = createStore(Reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#app'))