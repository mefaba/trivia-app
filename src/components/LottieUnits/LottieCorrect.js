import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/correct_lottie.json'

export default class LottieCorrect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <Lottie options={defaultOptions} height={200} width={200} />
  }
}