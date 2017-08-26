//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Card, CardSection, Button, Input} from './common'
import {emailChange, passwordChange} from '../actions'
import {connect} from 'react-redux'


class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChange(text)
    }
    onPasswordChange(text){
        this.props.passwordChange(text)
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
                    <Button>
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
export default connect(mapStateToProps, {emailChange, passwordChange})(LoginForm);
