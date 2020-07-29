import React from 'react';
import Routes from './src/routes'
import {StatusBar, View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent"/>
      <Routes />
    </>
  );
}
