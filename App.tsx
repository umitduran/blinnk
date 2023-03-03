/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient colors={['rgba(217, 217, 217, 0)', '#0099D0']} style={styles.container}>
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #0099D0 100%)',
    border: '1px solid #000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
} as const);

export default App;

/*
background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #0099D0 100%);
border: 1px solid #000000; */
