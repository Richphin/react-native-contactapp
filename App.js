
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contactlist from './src/screens/Contactlist';

import Loginscreen from './src/screens/Loginscreen';
import Signupscreen from './src/screens/Signupscreen';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Loginscreen/> */}
    {/* <Signupscreen/> */}
    <Contactlist/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
