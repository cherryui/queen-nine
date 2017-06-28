import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { Avatar, Button } from 'react-native-elements'

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.mainContainer}>
        <Avatar
          containerStyle={styles.cardButton}
          source={require('./icons/ace.png')}
          large
          rounded
        />
        <Avatar
          containerStyle={styles.cardButton}
          source={require('./icons/king.png')}
          large
          rounded
        />
        <Avatar
          containerStyle={styles.cardButton}
          source={require('./icons/queen.png')}
          large
          rounded
        />
        <Avatar
          containerStyle={styles.cardButton}
          source={require('./icons/jack.png')}
          large
          rounded
        />
        <Avatar
          containerStyle={styles.cardButton}
          source={require('./icons/10.png')}
          large
          rounded
        />
        <Avatar
          containerStyle={styles.cardButton}
          source={require('./icons/9.png')}
          large
          rounded
        />
        <Button
          large
          title='Submit Hand'
          borderRadius={20}
          backgroundColor={'red'}
          containerViewStyle={styles.submitHandButton}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  cardButton: {
  },

  submitHandButton: {
    width: 200
  }
})
