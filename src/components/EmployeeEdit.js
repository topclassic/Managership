//import liraries
import _ from 'lodash'
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate } from '../actions'

// create a component
class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee,(value, prop) => {
            this.props.employeeUpdate({ prop, value})
        })
    }
    onButtonPress(){
        const { names, phone, shift} = this.props
        console.log(names,phone,shift)
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
export default connect(mapStateToProps,{employeeUpdate})(EmployeeEdit)
