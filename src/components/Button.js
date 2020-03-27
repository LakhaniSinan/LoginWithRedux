import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onClick, children, errorFlow }) => {
    return (
        <TouchableOpacity style={[styles.ButtonStyle, (errorFlow) && { borderColor: '#fff' }]} onPress={onClick}>
            <Text style={[styles.TextStyle, (errorFlow) && { color: '#fff' }]} >{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    ButtonStyle: {
        borderWidth: 2,
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#009999',
        borderRadius: 7,
        backgroundColor:'#2C98A1',
        elevation:3
    },
    TextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
}
export default Button;