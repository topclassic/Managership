//import liraries
import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet } from 'react-native';
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import reducers from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

class App extends Component {
  componentDidMount(){
    const config = {
      apiKey: "AIzaSyCTQRvy47HmDO3t3Jtq7tuFjbhhBg5Ylpk",
      authDomain: "managership-39606.firebaseapp.com",
      databaseURL: "https://managership-39606.firebaseio.com",
      projectId: "managership-39606",
      storageBucket: "managership-39606.appspot.com",
      messagingSenderId: "303594256065"
    };
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View>
        <LoginForm/>
      </View>
      </Provider>
    );
  }
}

//make this component available to the app
export default App;

AppRegistry.registerComponent('Managership', () => App);
