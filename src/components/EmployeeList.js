import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
    componentDidMount(){
        this.props.employeesFetch()
    }
    render() {
        return (
            <View>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

});
export default connect(null, {employeesFetch})(EmployeeList)
