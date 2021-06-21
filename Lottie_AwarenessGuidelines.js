import React from 'react';
import LottieView from 'lottie-react-native';

export default class LottieAnimation_AwarenessGuidelines extends React.Component {
  render() {
    return (
      <LottieView
      source={require("../49999-guideline_awarenessGuidelines.json")}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}