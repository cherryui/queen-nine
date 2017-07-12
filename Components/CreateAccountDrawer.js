import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Text, Button } from 'react-native-elements'

export default class SignInDrawer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: null,
      password: null,
      secret: null,
      errors: null
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

  // updates state with secret
  handleChangeSecret = (text) => {
    this.setState({ secret: text })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text h3 style={styles.header}>Create Account</Text>
        {this.props.username && <Text style={styles.fetchingText}>Signed in as: {this.props.username}</Text>}
        <FormLabel>Username</FormLabel>
        <FormInput
          ref='username'
          value={this.state.username}
          onChangeText={this.handleChangeUsername}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          ref='password'
          value={this.state.password}
          onChangeText={this.handleChangePassword} 
          secureTextEntry
          autoCorrect={false}
        />
        <FormLabel>Secret Code to Create Account</FormLabel>
        <FormInput
          ref='secret'
          value={this.state.secret}
          onChangeText={this.handleChangeSecret} 
          secureTextEntry
          autoCorrect={false}
        />
        <Button
          onPress={() => this.props.createAccount(this.state.username, this.state.password, this.state.secret)}
          title='create account'
          borderRadius={20}
          backgroundColor={'orange'}
          containerViewStyle={styles.button}
          disabled={this.props.fetching}
        />
        {this.props.fetching ? <Text style={styles.fetchingText}>
          Creating your account! If no one has used the app in a while, this may take a moment as the server is woken from a deep slumber.
        </Text> : <Text style={styles.fetchingText}>{this.props.errors}</Text> }
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
