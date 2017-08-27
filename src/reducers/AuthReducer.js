import {EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from '../actions/types'

const InitialState = {email:'', password:'',user:null, error:'', loading:false}

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
                user: action.payload,
                ...InitialState
            }
        case LOGIN_USER_FAIL:
            return{
                ...state,
                error: 'Authentication Fail',
                loading: false
            }
        case LOGIN_USER:
            return{
                ...state,
                error:'',
                loading: true
            }
        default:
            return state
    }
}