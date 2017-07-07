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
    return (
      <View style={styles.container}>
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
  }
})
