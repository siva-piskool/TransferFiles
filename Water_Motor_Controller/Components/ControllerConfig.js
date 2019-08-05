import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
export default class ControllerConfig extends Component {
  state={
    color:"red"
  }
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{backgroundColor:this.state.color}}>Controller-Configuration</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    MainContainer: {
      marginTop: 20,
      marginLeft:10,
      height:80,
      backgroundColor:"pink"
      
    },
    item:{
      fontSize: 23,
      textAlign:"center"
    }
  });