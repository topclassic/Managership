import {EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../actions/types'

const InitialState = {email:'', password:'',user:null}

export default (state = InitialState, action) => {
    console.log(action)
    switch (action.type){
       
        case EMAIL_CHANGE:
            return{
                ...state,
                email: action.payload
            }
        case PASSWORD_CHANGE:
            return{
                ...state,
                password: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                user: action.payload
            }
        case LOGIN_USER_FAIL:
            return{
                ...state,
                error: 'Authentication Fail'
            }
        default:
            return state
    }
}