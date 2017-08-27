import {EMPLOYEE_UPDATE} from '../actions/types'

const InitialState = {
    names: '',
    phone: '',
    shift: '',
}

export default (state = InitialState, action) => {
    switch(action.type){
     
        case EMPLOYEE_UPDATE:
            return{
                ...state,
                [action.payload.prop]:action.payload.value
            }
        default:
            return state
    }
}