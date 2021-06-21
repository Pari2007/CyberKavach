import React, {Component} from "react";
import MyHeader from "../components/MyHeaderDesign"
import {View,Text,StyleSheet,Link,Image} from "react-native";

import Lottie_Guidelines from "../components/Lottie_AwarenessGuidelines"


export default class AwarenessGuidelines extends Component{
  render(){
  return(
    <View style = {styles.container}>
    <View style={{ flex: 0.12 }}>
    <MyHeader title ="Awareness Guidelines"/>
    </View>
    
    <Lottie_Guidelines/>
    <Text style ={styles.title}>The Safe-Sixteen-s </Text>
  <Text>.1.Do NOT accept friend requests from strangers on social networking sites.</Text>
  <Text>2.Do NOT trust online users unless you know and can trust them in real life.</Text>
  <Text>3.Do NOT share your personal information such as address, phone
  number, date of birth etc. on social media. Identity thieves can easily
  access and use this information.</Text>
  <Text>4.Immediately inform the social media service provider, if you notice that
  a fake account has been created by using your personal information.</Text>
  <Text>5.Do NOT share your vacations, travel plans etc. on social media.</Text>
  <Text>6.Always keep location services turned off on your devices unless
  necessary.</Text>
  <Text>7.Share your photos and videos only with your trusted friends by
  selecting right privacy settings on social media.</Text>
  <Text>8.Always use a strong password by using alphabets in upper case and
  lower case, numbers and special characters for your social media
  accounts.</Text>
  <Text>9.Do NOT allow social networking sites to scan your email account to look
  for your friends and send spam mails to them without your consent or
  knowledge.</Text>
  <Text>10.Do NOT announce your vacations, travel plans etc. on social media.</Text>
  <Text>11.Criminals can use it as an opportunity for theft etc.</Text>
  <Text>12.When chatting with someone online and you feel suspicious about your
  chat partner, try asking some unrelated scientific or mathematical
  questions. If it does NOT answer or acknowledge the question, it may
  mean that you are chatting with an automated computer bot.</Text>
  <Text>13.Do NOT use public computer/ cyber cafe to access social networking
  websites, it may be may be infected/ installed with a key logger
  application which will capture your keystrokes including the login
  credentials.</Text>
  <Text>14.Many social networking sites prompt you to download third-party
  applications that lets you access more pages. Do NOT download
  unverified third-party applications without doing research about its
  safety.</Text>
  <Text>15.Do NOT hesitate to report, if someone is posting offensive and abusive
  content on social media.</Text>
  <Text>16.Do NOT share or forward unverified posts/ news on social media forums.
  These may contain fake news or contain sensitive information which
  may mislead people.

  </Text>
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
})