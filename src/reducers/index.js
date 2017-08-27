import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import EmployeeFormRedux from './EmployeeFormRedux'

export default combineReducers({
    auth: AuthReducer, 
    employeeForm: EmployeeFormRedux
})
