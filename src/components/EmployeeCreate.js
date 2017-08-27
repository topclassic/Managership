//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button} from './common'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { Picker } from 'react-native'

// create a component
class EmployeeCreate extends Component {
    
    render() {
        return (
            <Card>
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
                
                <CardSection>
                    <Picker 
                        style={{flex:1}}
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

                <CardSection>
                    <Button>
                        Create
                    </Button>         
                </CardSection>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    
});

const mapStateToProps = (state) => {
    const { names, phone, shift} = state.employeeForm
    return {
        names,
        phone,
        shift
    }
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)
