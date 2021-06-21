import React, {Component} from "react";
import MyHeader from "../components/MyHeaderDesign"
import {View,Text,StyleSheet} from "react-native";
import Lottie_SafetyTips from "../components/Lottie_SafetyTips";
 


export default class SafetyTips extends Component{
  
  render(){
  return(
   
    <View style= {styles.container}>
     <View style={{ flex: 0.12 }}>
    <MyHeader title ="Safety Tips"/>
    </View>
    
    <Text style={styles.title}>The Notable Nine!</Text>
    <Lottie_SafetyTips/>
    <Text> 1.Secure your online presence just like you secure yourself.</Text>
    <Text> 2.Be mindful of your appearance on video chat & video calls.</Text>
    <Text> 3.Do not use Smartphone for taking sensitive personal photographs and videos.</Text>
    <Text> 4.Protect yourself from Cyber stalking.</Text>
    <Text> 5.Beware of fake social media accounts- Not all the accounts are real and not all information provided on accounts are true.</Text>
    <Text> 6.Be cautious with sensitive Browsing.</Text>
    <Text> 7.The deleted data on your communication devices can be recovered.</Text>
    <Text> 8.Be careful while you give your mobile devices, PC’s for servicing/repairing/selling.</Text>
    <Text> 9.Protect your communication devices</Text>
    
 </View>
    
  )
  }

  
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#00E5F7",
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontSize: 30,
    fontWeight: "300",
    paddingBottom: 30,
    color: "white"
  },
});