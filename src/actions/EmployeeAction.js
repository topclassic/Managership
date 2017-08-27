import firebase from 'firebase'
import {EMPLOYEE_UPDATE} from './types'

export const employeeUpdate = ({prop, value}) => {
    return{
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
}

export const employeeCreate = ({ names, phone, shift}) => {
    const {currentUser} = firebase.auth()

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({names ,phone, shift})
}