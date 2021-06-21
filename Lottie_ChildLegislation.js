import React from 'react';
import LottieView from 'lottie-react-native';

export default class LottieAnimation_Childlegislation extends React.Component {
  render() {
    return (
      <LottieView
      source={require("../58918-legal-statement_childLegislation.json")}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}