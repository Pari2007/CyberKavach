import React, {Component} from "react";
import MyHeader from "../components/MyHeaderDesign"
import {View,Image,StyleSheet} from "react-native";


export default class HomeScreen extends Component{
  render(){
  return(

    <View>
    <MyHeader title ="Cyber Kavach"/>
     <Image
            source={require("../homescreen_background.jpg")}
            style={styles.bookImage}
            
          />
    </View>

    
  )
  }

  
}

const styles = StyleSheet.create({
   bookImage: {
    width: "100%",
    height: 600,
    marginTop : 100,
  }
})
