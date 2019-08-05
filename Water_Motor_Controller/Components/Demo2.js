import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import Wifi from "../src/Wifi";
import WaterLevel from "../src/WaterLevel";
import SystemInfo from "./SystemInfo";
import ControllerConfig from "./ControllerConfig";


class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wifi",
      btn1:false,
      btn2:false,
      btn3:false,
      btn4:false,
    };
  }

  renderComponent = param => {
    switch (param) {
      case "wifi":
        return <Wifi />;
        break;
      case "Water-Level":
        return <WaterLevel />;
        break;
      case "sys-info":
        return <SystemInfo />;
        break;
      case "Controller-Config":
        return <ControllerConfig />;
        break;
    }
  };
  render() {
    return (
      <View>
        <View>{this.renderComponent(this.state.name)}</View>
        <View styles={styles.btncontainer}>
        <View style={styles.button}>
        <Button
          title="1"
          disabled={this.state.btn1}
          onPress={() => {
            this.setState({ name: "wifi",btn1:true,btn2:false,btn3:false, btn4:false });
          }}
        />
        <Button
          title="2"
          disabled={this.state.btn2}
          onPress={() => {
            this.setState({ name: "Water-Level",btn2:true,btn1:false,btn3:false, btn4:false });
          }}
        />
        </View> 
        </View>
        <View styles={styles.btncontainer}>
          <View style={styles.button}>
            <Button
              title="3"
              disabled={this.state.btn3}
              onPress={() => {
                this.setState({ name: "sys-info",btn1:false,btn2:false,btn3:true, btn4:false });
              }}
            />
            <Button
              title="4"
              disabled={this.state.btn4}
              onPress={() => {
                this.setState({ name: "Controller-Config",btn1:false,btn2:false,btn3:false, btn4:true });
              }}
            />
          </View>
          <View style={styles.button} />
        </View>
        
      </View>
    );
  }
}
export default Demo2;
const styles = StyleSheet.create({
  btncontainer: {
    flex: 1,
    justifyContent: "center",
    
  },
  button: {
    marginTop:20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
