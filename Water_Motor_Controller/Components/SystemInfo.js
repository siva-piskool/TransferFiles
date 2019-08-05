import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
export default class SystemInfo extends Component {
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={styles.item}>Device Model: Oppo A3s</Text>
          <Text style={styles.item}>Serial NO:  CPH80005</Text>
          <Text style={styles.item}>Firmware Version: Android 8.0</Text>
          <Text style={styles.item}>Build Number: 46878</Text>
          <Text style={styles.item}>IP Address: 123.122.333.331</Text>
          <Text style={styles.item}>Mac Address:  54649165</Text>
          <Text style={styles.item}>Device Uptime:  8sec</Text>
          <Text style={styles.item}>Pulse Count:  20</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    MainContainer: {
      marginTop: 20,
      marginLeft:10,
      
    },
    item:{
      fontSize: 23
    }
  });