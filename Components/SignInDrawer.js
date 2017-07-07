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
  render () {
    return (
      <View style={styles.container}>
        <Text h3 style={styles.header}>Sign In:</Text>
        <FormLabel>Username</FormLabel>
        <FormInput
          ref='username'
          value={this.state.username}
          onChangeText={this.handleUsernameChange} 
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          ref='password'
          value={this.state.password}
          onChangeText={this.handlePasswordChange} 
          secureTextEntry
        />
        <Button
          onPress={() => this.props.handleWinLossClick(false)}
          title='log in'
          borderRadius={20}
          backgroundColor={'orange'}
          containerViewStyle={styles.button}
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
