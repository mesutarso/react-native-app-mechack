import React, { Component } from 'react'
import { View, TextImput, Button,StyleSheet } from 'react-native';

class Search extends Component{
    render(){
        return(
                <View>
                    <TextImput></TextImput>
                    <Button>Rechercher</Button>
                </View>
        )
    }
}