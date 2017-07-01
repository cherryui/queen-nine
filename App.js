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
      hand: null,
    }
  }
  // set state to switch to win/loss component
  handleSubmitClick = (state) => {
    this.setState({ submitted: true, hand: state })
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
        hand: this.state.hand
      })
    })
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