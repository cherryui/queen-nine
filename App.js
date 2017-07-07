import React from 'react'
import { View } from 'react-native'
import Main from './Components/Main.js'
import WonLost from './Components/WonLost'

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
    console.log(won)
    this.setState({ won: won })

    // send request
    fetch('https://euchre-call.herokuapp.com/api/calls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hand: {
          right: this.state.lowerState.right,
          left: this.state.lowerState.left,
          ace: this.state.lowerState.ace,
          king: this.state.lowerState.king,
          queen: this.state.lowerState.queen,
          ten: this.state.lowerState.ten,
          nine: this.state.lowerState.nine
        },
        trump: this.state.lowerState.trump,
        plusMinus: this.state.lowerState.plusMinus,
        wonHand: won
      })
    })
      .then((response) => 
        {
          if (response.ok) {
            this.setState({ submitted: false, won: null, lowerState: null })
          }
        }
      )
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