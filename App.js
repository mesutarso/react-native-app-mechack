import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>My first app</Text>
      </View>
    );
  }
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
