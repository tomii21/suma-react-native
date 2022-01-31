import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Home from './components/index'
import { StyleSheet, Text, View, Input, Button } from 'react-native';

export default function App() {
  
  



  return (
    <View style={styles.container}>
      
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
