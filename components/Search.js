import React, { Component } from 'react'
import { View, TextImput, Button,StyleSheet } from 'react-native';

class Search extends Component{
    render(){
        return(
                <View style={styles.container}>
                    <TextImput placeholder="rechercher le film"/>
                    <Button title="recherche" onPress={()=>{}}/>
                </View>
        )
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

export default Search