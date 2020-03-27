import React, { Component } from 'react';
import { View, Text, TextInput, Animated, Easing } from 'react-native';


class Input extends Component {
    //material-community, font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, zocial,


    render() {
        const { label, placeholder, secureTextEntry, onChangeText, value } = this.props;
        return (
            <View style={styles.containerStyle}>

                <Text style={styles.labelStyle}>{label}</Text>

                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={styles.TextInputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid={'transparent'}
                />
            </View>
        );
    }
}

const styles = {
    TextInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        paddingTop: 5,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        color: '#3498DB',
        fontWeight: 'bold',
        paddingTop: 3
    },
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
    },
    
}

export default Input;