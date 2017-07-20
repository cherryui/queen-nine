import React from 'react'
import { View, Keyboard } from 'react-native'
import Main from './Components/Main.js'
import WonLost from './Components/WonLost'
import SignInDrawer from './Components/SignInDrawer'
import CreateAccountDrawer from './Components/CreateAccountDrawer'

import Drawer from 'react-native-drawer'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      submitted: false,
      won: null,
      lowerState: null,

      fetching: false,
      errors: null,

      rightDrawerOpen: false,
      leftDrawerOpen: false,

      username: null,
      userCallCount: null,
      totalCallCount: null
    }

    // this.baseURL = 'https://queen-nine.herokuapp.com/api/'
    this.baseURL = 'https://06954721.ngrok.io/api/'
  }

  // set state to switch to win/loss component
  handleSubmitClick = (state) => {
    this.setState({ submitted: true, lowerState: state })
  }

  // handle click on user happy face to open login drawer
  handleRightUserClick = () => {
    if (this.state.rightDrawerOpen) {
      this.setState({ rightDrawerOpen: false })
      Keyboard.dismiss()
    } else {
      this.setState({ rightDrawerOpen: true })
    }
  }

  // handle click on user create account icon to open create account drawer
  handleLeftUserClick = () => {
    if (this.state.leftDrawerOpen) {
      this.setState({ leftDrawerOpen: false })
      Keyboard.dismiss()
    } else {
      this.setState({ leftDrawerOpen: true })
    }
  }

  // handle click on WonLost back button
  handleBackClick = () => {
    this.setState({ submitted: false, won: null, lowerState: null })
  }

  // set won in state, send request and reset everything
  handleWinLossClick = (won) => {
    this.setState({ won: won, fetching: true })

    const url = this.baseURL + 'calls/create'
    // send request
    fetch(url, {
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
        user: this.state.username,
        trump: this.state.lowerState.trump,
        plusMinus: this.state.lowerState.plusMinus,
        wonHand: won
      })
    })
      // set state accordingly, updating fetching to show you got data back
      .then((response) => 
        {
          this.setState({ fetching: false })
          if (response.ok) {
            this.setState({ submitted: false, won: null, lowerState: null })
            this.getCallInfo(this.state.username)
          } else {
            return response.json()
          }
        }
      )
      .then((responseJSON) => {
        this.setState({ errors: responseJSON.errors })
      })
      .catch((error) => console.log("ERROR", error))
  }

  // set state to fetching, then send requst to log in the user
  // once user is logged in, set session token, then use that for other requests
  logInUser = (username, password) => {
    this.setState({ fetching: true })

    const url = this.baseURL + 'users/login'

    // send request
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      // set state based on if response is ok
      .then((response) => {
        this.setState({ fetching: false })
        if (response.ok) {
          this.setState({ username: username, errors: null })
          this.getCallInfo(username)
        } else {
          console.log(response)
          return response.json()
        }
      })
      // add errors if response is not ok
      .then((responseJSON) => {
        this.setState({ errors: responseJSON.errors })
      })
      .catch((error) => console.log("ERROR", error))
  }

  // set state to fetching, then send requst to create the user
  // if good, kick off request to login
  // if not, set errors
  createAccount = (username, password, secret) => {
    this.setState({ fetching: true })

    // filter out bad usernames and passwords
    if (username === null || username === '' || password === null || password === '') {
      this.setState({ fetching: false, errors: "Username and password must both exist!" })
      return
    }

    const url = this.baseURL + 'users/create'

    // send request
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        secret: secret
      })
    })
      // set state based on if response is ok
      .then((response) => {
        this.setState({ fetching: false })
        if (response.ok) {
          this.setState({ errors: null, username: username })
          this.getCallInfo(username)
        } else {
          return response.json()
        }
      })
      // add errors if response is not ok
      .then((responseJSON) => {
        this.setState({ errors: responseJSON.errors })
      })
      .catch((error) => console.log("ERROR", error))
  }

  // get call info and set state with it
  getCallInfo = (username) => {
    const url = this.baseURL + 'calls/' + username

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then((responseJSON) => {
        this.setState({ userCallCount: responseJSON.userCount, totalCallCount: responseJSON.totalCount })
      })
      .catch((error) => console.log("ERROR", error))
  }

  // set state to fetching, then send GET to log user out
  logOutUser = () => {
    this.setState({ fetching: true })

    const url = this.baseURL + 'users/logout'

    // send request
    fetch(url)
      .then((response) => {
        if (response.ok) {
          this.setState({ username: null, fetching: false })
        } else {
          this.setState({ fetching: false })
        }
      })
      .catch((error) => console.log("ERROR", error))
  }

  render () {
    var content = null
    if (this.state.submitted) {
      content = <WonLost
        handleWinLossClick={this.handleWinLossClick}
        handleBackClick={this.handleBackClick}
        fetching={this.state.fetching}
        errors={this.state.errors}
      />
    } else {
      content = (
        <Drawer
          open={this.state.leftDrawerOpen}
          content={<CreateAccountDrawer
            createAccount={this.createAccount}
            fetching={this.state.fetching}
            errors={this.state.errors}
            username={this.state.username}
          />}
          tapToClose={true}
          openDrawerOffset={100}
          onClose={this.handleLeftUserClick}
          tweenHandler={Drawer.tweenPresets.parallax}
        >
          <Drawer
            open={this.state.rightDrawerOpen}
            content={<SignInDrawer
              username={this.state.username} 
              fetching={this.state.fetching}
              errors={this.state.errors}
              logInUser={this.logInUser}
              logOutUser={this.logOutUser}
              userCount={this.state.userCallCount}
              totalCount={this.state.totalCallCount}
            />}
            tapToClose={true}
            openDrawerOffset={100}
            side='right'
            onClose={this.handleRightUserClick}
            tweenHandler={Drawer.tweenPresets.parallax}
          >
            <Main 
              handleSubmitClick={this.handleSubmitClick}
              handleRightUserClick={this.handleRightUserClick}
              handleLeftUserClick={this.handleLeftUserClick}
              username={this.state.username}
            />
          </Drawer>
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