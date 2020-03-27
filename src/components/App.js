import React from 'react'
import {View,Text} from 'react-native'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Store from './Store'
import ReduxThunk from 'redux-thunk'

import Root from '../navigation'
import reducers from '../reducers'

class App extends React.Component{
    render(){
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk))
        return (
        <Provider store={store}>
            <Root/>
            </Provider>
        )
    }
}

export default App