import React from 'react'
import { View } from 'react-native'
import Main from './Components/Main.js'
import WonLost from './Components/WonLost'
import SignInDrawer from './Components/SignInDrawer'

import Drawer from 'react-native-drawer'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      submitted: false,
      won: null,
      lowerState: null,

      fetching: false,

      drawerOpen: false,
      username: null
    }
  }

  // set state to switch to win/loss component
  handleSubmitClick = (state) => {
    this.setState({ submitted: true, lowerState: state })
  }

  // handle click on user happy face to open drawer
  handleUserClick = () => {
    if (this.state.drawerOpen) {
      this.setState({ drawerOpen: false })
    } else {
      this.setState({ drawerOpen: true })
    }
  }

  // set won in state, send request and reset everything
  handleWinLossClick = (won) => {
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

  // set state to fetching, then send requst to log in the user
  // once user is logged in, set session token, then use that for other requests
  logInUser = (username, password) => {
    this.setState({ fetching: true })
  }

  render () {
    var content = null
    if (this.state.submitted) {
      content = <WonLost
        handleWinLossClick={this.handleWinLossClick}
      />
    } else {
      content = (
        <Drawer
          open={this.state.drawerOpen}
          content={<SignInDrawer username={this.state.username} fetching={this.state.fetching} logInUser={this.logInUser}/>}
          tapToClose={true}
          openDrawerOffset={100}
          side='right'
          onClose={this.handleUserClick}
          tweenHandler={Drawer.tweenPresets.parallax}
        >
          <Main 
            handleSubmitClick={this.handleSubmitClick}
            handleUserClick={this.handleUserClick}
          />
        </Drawer>
      ) 
    }
    return (
      <View style={{flex: 1}}>
        {content}
      </View>
    )
  }
}