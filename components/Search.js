import React, { Component } from 'react'
import { View, TextImput, Button,StyleSheet } from 'react-native';

class Search extends Component{
    render(){
        return(
                <View style={styles.container}>
                    <TextImput style={styles.textinput} placeholder="rechercher le film"/>
                    <Button style={styles.button} title="recherche" onPress={()=>{}}/>
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
    textinput : {
        flex:1,
        height:50,
        borderWidth:1,
        borderColor:black,
        padding: 5
    },
    button:{
        backgroundColor:blue
    }
  });

export default Search