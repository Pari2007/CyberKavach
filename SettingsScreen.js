import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Card } from "react-native-elements";
import MyHeader from "../components/MyHeaderDesign";
import db from "../config";
import firebase from "firebase";
import LottieSettings from "../components/Lottie_Settings";


export default class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      name: "",
      parent_contact: "",
      age : "",
    };
  }

  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection("users")
      .where("email_id", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            name: data.name,
            parent_contact: data.mobile_number,
            age : data.age
          });
        });
      });
  };

  updateUserDetails = () => {
    db.collection("users").doc(this.state.docId).update({
      name: this.state.name,
      emailId : this.state.email_id,
      address: this.state.address,
      parent_contact: this.state.mobile_number,
    });

    Alert.alert("Profile Updated Successfully");
  };

  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.12 }}>
          <MyHeader title="Settings" navigation={this.props.navigation} />
        </View>

        <LottieSettings/>


        <View style={styles.formContainer}>
            <View
              style={{
                flex: 0.66,
              }}
            >
            <Text style={styles.label}>Name </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Name"}
                maxLength={12}
                onChangeText={(text) => {
                  this.setState({
                    name: text,
                  });
                }}
                value={this.state.name}
              />

            <Text style={styles.label}>Age </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Age"}
                maxLength={2}
                keyboardType={"numeric"}
                onChangeText={(text) => {
                  this.setState({
                    age: text,
                  });
                }}
                value={this.state.age}
              />

                <Text style={styles.label}>Contact </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Contact"}
                maxLength={10}
                keyboardType={"numeric"}
                onChangeText={(text) => {
                  this.setState({
                    parent_contact: text,
                  });
                }}
                value={this.state.parent_contact}
              />

              
            </View>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.updateUserDetails();
                  }}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#00E5F7"
  },
  formContainer:{
    flex: 0.88,
    justifyContent:'center'
  },
  label:{
    fontSize:(18),
    color:"#717D7E",
    fontWeight:'bold',
    padding:10,
    marginLeft:20,
  },
  formTextInput: {
    width: "90%",
    height: (50),
    padding: (10),
    borderWidth:1,
    borderRadius:2,
    borderColor:"blue",
    marginBottom:(20),
    marginLeft:(20),
    backgroundColor : "white"
  },
  button: {
    width: "75%",
    height: (60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (50),
    backgroundColor: "blue",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: (20),
  },
  buttonView:{
    flex: 0.22,
    alignItems: "center",
    marginTop:(100)
},
  buttonText: {
    fontSize: (23),
    fontWeight: "bold",
    color: "#fff",
  },
});
