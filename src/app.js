//import liraries
import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet } from 'react-native';
import firebase from 'firebase'

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
      <View style={styles.container}>
        <Text>App</Text>
      </View>
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

//make this component available to the app
export default App;


AppRegistry.registerComponent('Managership', () => App);
