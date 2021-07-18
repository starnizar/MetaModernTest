import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <NavigationContainer>
      <NavBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  burger:{
    width: 28,
    height: 28,
  },
});
