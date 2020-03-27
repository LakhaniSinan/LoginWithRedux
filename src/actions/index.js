import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} 
    from   './types'
import firebase from 'firebase'

export const emailChange = (text)=>{
    return {
        type:EMAIL_CHANGED,
        payload:text
    }
}

export const passwordChange = (text)=>{
    return {
        type:PASSWORD_CHANGED,
        payload:text
    }
 }

 export const loginUser=({email,password})=>{
     return (dispatch)=>{
         dispatch({type:LOGIN_USER})
    firebase.auth().signInWithEmailAndPassword(email,password)
   .then(user=>{
           dispatch({type:LOGIN_USER_SUCCESS,payload:user})
   })
   .catch(()=>{
       firebase.auth().createUserWithEmailAndPassword(email,password)
       .then(user=>{
           dispatch({type:LOGIN_USER_SUCCESS,payload:user})
       })
       .catch(()=>{
           dispatch({type:LOGIN_USER_FAIL,payload:'Authentication Failed'})
       })
   })
}
 }