import React from 'react'
import { View } from 'react-native'
import Main from './Main.js'
import WonLost from './WonLost'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      submitted: false,
      won: null,
      lowerState: null,
    }
  }
  // set state to switch to win/loss component
  handleSubmitClick = (state) => {
    this.setState({ submitted: true, lowerState: state })
  }

  // set won in state, send request and reset everything
  handleWinLossClick = (won) => {
    this.setState({ won: won })

    // send request
    fetch('http://localhost:8000/api/calls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hand: {
          right: this.state.lowerState.right,
          left: this.state.lowerState.left,
          ace: this.state.lowerState.left,
          king: this.state.lowerState.king,
          queen: this.state.lowerState.queen,
          ten: this.state.lowerState.ten,
          nine: this.state.lowerState.nine
        },
        trump: this.state.lowerState.trump,
        plusMinus: this.state.lowerState.plusMinus,
        wonHand: this.state.won
      })
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  }

  render () {
    console.log(this.state)

    var content = null
    if (this.state.submitted) {
      content = <WonLost
        handleWinLossClick={this.handleWinLossClick}
      />
    } else {
      content = <Main 
        handleSubmitClick={this.handleSubmitClick}
      /> 
    }
    return (
      <View style={{flex: 1}}>
        {content}
      </View>
    )
  }
}