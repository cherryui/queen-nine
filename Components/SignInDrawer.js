import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Text, Button } from 'react-native-elements'

export default class SignInDrawer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: null,
      password: null
    }
  }

  // updates state with username
  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  // updates state with password
  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render () {
    // define content
    var content = null
    if (this.props.username) {
      content = (
        <View>
          <Text h3 style={styles.header}>{this.props.username}</Text>
          <Button
            onPress={() => this.props.logOutUser()}
            title='log out'
            borderRadius={20}
            backgroundColor={'orange'}
            containerViewStyle={styles.button}
            disabled={this.props.fetching}
          />
        </View>
      )
    } else {
      content = (
        <View>
          <Text h3 style={styles.header}>Sign In:</Text>
          <FormLabel>Username</FormLabel>
          <FormInput
            ref='username'
            value={this.state.username}
            onChangeText={this.handleChangeUsername} 
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            ref='password'
            value={this.state.password}
            onChangeText={this.handleChangePassword} 
            secureTextEntry
          />
          <Button
            onPress={() => this.props.logInUser(this.state.username, this.state.password)}
            title='log in'
            borderRadius={20}
            backgroundColor={'orange'}
            containerViewStyle={styles.button}
            disabled={this.props.fetching}
          />
          {this.props.fetching && <Text style={styles.fetchingText}>
            Logging in! If no one has used the app in a while, this may take a moment as the server is woken from a deep slumber
          </Text>}
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 30
  },

  button: {
    marginTop: 30
  },

  fetchingText: {
    color: 'orange',
    textAlign: 'center',
    margin: 8,
    marginTop: 15
  }
})
