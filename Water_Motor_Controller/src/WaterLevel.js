import React, {Component} from 'react';
import {View,Picker,Text, StyleSheet} from 'react-native';
export default class WaterLevel extends Component{
state={
    user:'',
    sump:''
}
updateUser=(user)=>{
    this.setState({user:user})
}
updateSump=(sump)=>{
    this.setState({sump:sump})
}
render(){
    return(<View>
        <Text style={{fontSize:32,fontWeight:"bold",color:"blue",textAlign:"center", marginBottom:20}}>Water-Level</Text>
        <View style={{borderBottomColor: 'blue',borderBottomWidth:5, marginBottom:20}}/>
        <View> 
        <Text style = {styles.text1}>Over-head Tank</Text>
        <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
            <Picker.Item label="Full" value="full" />
            <Picker.Item label="Empty" value="empty" />
            <Picker.Item label="b/w Empty and Full" value="empty and full" />
        </Picker>
        <Text style = {styles.text}>{this.state.user}</Text>
        <Text style = {styles.text1}>Sump</Text>
        <Picker selectedValue = {this.state.sump} onValueChange = {this.updateSump}>
            <Picker.Item label="Full" value="full" />
            <Picker.Item label="Empty" value="empty" />
            <Picker.Item label="b/w Empty and Full" value="empty and full" />
        </Picker>
        <Text style = {styles.text}>{this.state.sump}</Text>
        </View>
        <View style={{borderColor:"blue", borderWidth:5, marginTop:20}}/>
    </View>)
}
}
const styles = StyleSheet.create({
    text: {
       fontSize: 20,
       alignSelf: 'center',
       color: 'red'
    },
    text1: {
        fontSize: 20,
        
     }
 

 })