import React from 'react'
import {View,Text} from 'react-native'
import firebase from 'firebase'
import LoginForm from './LoginForm'



class Store extends React.Component{

    constructor(props){
        super(props)

    }

    componentDidMount(){
      //Firebase Details Here
          if(!firebase.apps.length){
          firebase.initializeApp(firebaseConfig)
    }
}
    render(){
        console.log(this.props);
        
        return (
          <LoginForm navigattion={this.props.navigattion}/>
        )
    }
}

export default Store