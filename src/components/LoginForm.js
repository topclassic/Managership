//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Card, CardSection, Button, Input} from './common'
import {emailChange, passwordChange, loginUser} from '../actions'
import {connect} from 'react-redux'


class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChange(text)
    }
    onPasswordChange(text){
        this.props.passwordChange(text)
    }
    onButtonPress(){
        const {email, password} = this.props
        this.props.loginUser({email, password})
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmai.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}
export default connect(mapStateToProps, {emailChange, passwordChange, loginUser})(LoginForm);
