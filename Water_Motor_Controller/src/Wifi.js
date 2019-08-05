import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
 } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Wifi extends Component {
  state = {
    ssid: null,
    passphrase: null,
    mode: null
  }
  componentDidMount(){
      fetch("http://10.0.2.2:3000/wifi")
      .then((response)=>response.json())
      .then((responseJson)=>{
          this.setState({
              ssid:responseJson.ssid,
              passphrase:responseJson.passphrase,
              mode:responseJson.mode
  
          })
      })
      .catch((error)=>{
          console.log(error)
      });
  }
  onChangeText=(key, val)=>{
      this.setState({ [key]:val})
  }
  submit=()=>{
      fetch('http://10.0.2.2:3000/wifi',{
          method:"POST",
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, 
        body:JSON.stringify(this.state)     
      });
  }
  render(){
      return(<ScrollView style={styles.container}>
          <View>
              <Text style={{color:"blue",fontSize:32,fontWeight:"bold",textAlign:"center"}}>Wifi-Settings</Text>
          </View>
          <View>
        <Text  style={styles.label}>SSID:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="SSID"
          placeholderTextColor="#9a73ef"
          onChangeText={val => this.onChangeText('ssid', val)}
          value={this.state.ssid}
        />
        <Text  style={styles.label}>PassPhrase:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="PassPhrase"
          placeholderTextColor="#9a73ef"
          onChangeText={val => this.onChangeText('passphrase', val)}
          value={this.state.passphrase}
        />
        <Text  style={styles.label}>Wifi-Mode:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Wifi-Mode"
          placeholderTextColor="#9a73ef"
          onChangeText={val => this.onChangeText('mode', val)}
          value={this.state.mode}
        />
         <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submit}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
          </View>
    </ScrollView>)
  }

}

const styles = StyleSheet.create({
    container: {
      paddingTop: 20
    },
    input: {
      margin: 8,
      height: 40,
      borderColor: "#7a42f4",
      borderWidth: 1
    },
    submitButton: {
      backgroundColor: "#7a42f4",
      padding: 10,
      margin:8,
      height: 40
    },
    submitButtonText: {
      color: "white",
      textAlign: "center"
    },
    label:{
        margin:8,
        fontSize:20
      }
      
  });