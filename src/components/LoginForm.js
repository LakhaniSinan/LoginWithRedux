import React, { Component } from 'react';
import { View, Text,Alert } from 'react-native';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import { emailChange, passwordChange,loginUser} from '../actions';

import Spinner from './Spinner';



class LoginForm extends Component {
    //=========================================
   

    //============================= ============

    onEmailChange(text) {
        this.props.emailChange(text)
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({email, password});

    }


    renderError = () => {
        console.log('Props in loginForm', this.props);

        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    onAuthTrue = () => {
       
        const {email}=this.props;
        if (this.props.user) {

            this.props.navigation.navigate('profile');
        Alert.alert('Welcome Back',email)}
    }

    renderSpinner() {
        if (this.props.loading)
            return <Spinner />
        else
            return <Button onClick={this.onButtonPress.bind(this)}>Login</Button>
    }
    render() {

        this.onAuthTrue()
    
        return (
          <View>
              
                <CardSection>

                    <Input
                        label="Email"
                        placeholder="Email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        
                    />
                </CardSection>

                <CardSection>
                
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    
                    />

                </CardSection>
                {this.renderError()}

                <CardSection errorFlow={this.props.errorFlow}>
                    {this.renderSpinner()}
                </CardSection>

             
                </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        email: state.Auth.email,
        password:state.Auth.password,
        error:state.Auth.error,
        loading:state.Auth.loading
       
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 16
    },
    wrapper:
    {
        display: 'flex',
        flex: 1
    },
    checkStyle: {
        position: 'absolute',
        right: 0,
        bottom: 10,
    }
}
export default connect(mapStateToProps, { emailChange,passwordChange,loginUser})(LoginForm);