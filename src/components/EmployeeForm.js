//import liraries
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button} from './common'
import { connect } from 'react-redux'
import { employeeUpdate, employeeForm } from '../actions'

// create a component
class EmployeeForm extends Component {
    render() {
        return (
            <View>
                 <CardSection>
                    <Input
                        label="Name"
                        placeholder="Name"
                        value={this.props.names}
                        onChangeText={value => this.props.employeeUpdate({prop:'names',value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="xxx-xxx-xxxx"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop:'phone',value})}
                    />
                </CardSection>
                
                <CardSection style={{flexDirection:'column'}}>
                    <Text style={styles.pickerTextStye}>Shift</Text>
                    <Picker                 
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop:'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuseday" value="Tuseday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
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
export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm)
