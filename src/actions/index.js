import {EMAIL_CHANGE, PASSWORD_CHANGE} from './types'
import firebase from 'firebase'

export const emailChange = (text) => {
    return{
        type: EMAIL_CHANGE,
        payload: text
    }
}

export const passwordChange = (text) => {
    return{
        type: PASSWORD_CHANGE,
        payload: text
    }
}

export const loginUser = ({email, password}) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => console.log(user))

}