import React, {Component} from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import ScanScreen from "./screens/scanScreen";
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>
          Bar Code Scanner App  </Text>
      <AppContainer></AppContainer>
      <ScanScreen/>
      <Image
          style={{ width: 280, height: 270, marginLeft: 30, marginTop: 290 }}
          source={require('./assets/BarcodeScanner.jpg')}
        />
    </View>
  );
}
}
const TabNavigator=createBottomTabNavigator({
  ScanScreen:{
    screen : ScanScreen
  }
})
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
