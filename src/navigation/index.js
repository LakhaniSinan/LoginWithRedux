import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import React from 'react'
import Store from '../components/Store'


const Root=createStackNavigator({
    Store:{screen:Store,
    navigationOptions:{
        headerTitle:'Please Login',
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#2C98A1'
        }
    }}
})

export default createAppContainer(Root)