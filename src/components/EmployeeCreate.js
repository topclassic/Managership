//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button} from './common'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import { Picker } from 'react-native'
import EmployeeForm from './EmployeeForm'

// create a component
class EmployeeCreate extends Component {
    onButtonPress(){
        const { names, phone, shift} = this.props

        this.props.employeeCreate({ names, phone, shift:shift||'Monday'})
    }
    
    render() {
        console.log(this.props.employee)
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>         
                </CardSection>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    pickerTextStye:{
        fontSize: 18,
        paddingLeft: 20
    }
});

const mapStateToProps = (state) => {
    const { names, phone, shift} = state.employeeForm
    return {
        names,
        phone,
        shift
    }
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate)
