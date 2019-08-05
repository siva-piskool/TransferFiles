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
      name: "wifi"
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
          onPress={() => {
            this.setState({ name: "wifi" });
          }}
        />
        <Button
          title="2"
          onPress={() => {
            this.setState({ name: "Water-Level" });
          }}
        />
        </View> 
        </View>
        <View styles={styles.btncontainer}>
          <View style={styles.button}>
            <Button
              title="3"
              onPress={() => {
                this.setState({ name: "sys-info" });
              }}
            />
            <Button
              title="4"
              onPress={() => {
                this.setState({ name: "Controller-Config" });
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
