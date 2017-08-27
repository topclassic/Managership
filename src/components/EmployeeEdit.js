//import liraries
import _ from 'lodash'
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Card, CardSection, Button, Confirm } from './common'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave} from '../actions'
import Communications from 'react-native-communications'

// create a component
class EmployeeEdit extends Component {
    state = {showModal:false}
    componentWillMount(){
        _.each(this.props.employee,(value, prop) => {
            this.props.employeeUpdate({ prop, value})
        })
    }
    onButtonPress(){
        const { names, phone, shift} = this.props
        console.log(names,phone,shift)
        this.props.employeeSave({ names, phone, shift, uid: this.props.employee.uid})
    }
    onTextPress(){
        const { phone, shift} = this.props
        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Change
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=> this.setState({showModal:!this.state.showModal})}>
                        Delete Employee
                    </Button>
                </CardSection>
                <Confirm visible={this.state.showModal}>
                    Are you sure want to delete this?
                </Confirm>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapStateToProps = (state) => {
    const { names, phone, shift } = state.employeeForm
    return {
        names,
        phone,
        shift
    }
}
export default connect(mapStateToProps,{employeeUpdate,employeeSave})(EmployeeEdit)
