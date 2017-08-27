import { EMPLOYEE_FETCH_SUCCESS } from '../actions/types'

const InitialState = {}

export default (state = InitialState, action) => {
    switch(action.type){
        case EMPLOYEE_FETCH_SUCCESS:
            console.log(action)
            return action.payload

        default:
            return state
    }
}