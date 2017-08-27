import _ from 'lodash'
import React, { Component } from 'react';
import { ListView, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
    componentDidMount(){
        this.props.employeesFetch()
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }
    createDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(employees)
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
const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return {
            ...val,
            uid
        }
    })
}
export default connect(null, {employeesFetch})(EmployeeList)
