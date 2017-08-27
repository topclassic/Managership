import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import EmployeeFormRedux from './EmployeeFormRedux'
import EmployeeReducer from './EmployeeReducer'

export default combineReducers({
    auth: AuthReducer, 
    employeeForm: EmployeeFormRedux,
    employees: EmployeeReducer
})
