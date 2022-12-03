import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Image} from 'react-native';

const MyApp = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('./screens/background.jpg')}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./screens/logo.png')} />
        <Text style={styles.welcomeText}>Welcome to dhiway!!</Text>
      </View>
      

      <View style={styles.loginbutton}>
        <Text style={styles.buttonText}>Resgister</Text>
      </View>
      <View style={styles.registerbutton}>
        <Text style={styles.buttonText}>About us</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 150,
    // backgroundColor: 'red'
  },
  header: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  loginbutton: {
    width: '100%',
    height: 60,
    backgroundColor: 'orange',
    alignItems:'center',
    paddingTop: 20
  },
  registerbutton: {
    width: '100%',
    height: 60,
    backgroundColor: 'teal',
    alignItems:'center',
    paddingTop: 20
  },
  welcomeText: {
    color: 'black',
    fontFamily: "sans-serif",
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  }
});
export default MyApp;
