import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { Avatar, Button, Text } from 'react-native-elements'

import CardSet from './CardSet.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showSuit: false
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text h3 style={{color: 'white'}}>Euchre Call</Text>
        <CardSet card='king'/>
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
        <View style={styles.buttonContainer}>
          <Button
            title='-'
            borderRadius={20}
            backgroundColor={'red'}
            containerViewStyle={styles.submitHandButton}
          />
          <Button
            title='\'
            borderRadius={20}
            backgroundColor={'red'}
            containerViewStyle={styles.submitHandButton}
          />
          <Button
            title='+'
            borderRadius={20}
            backgroundColor={'red'}
            containerViewStyle={styles.submitHandButton}
          />
        </View>
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
    marginRight: 10,
    marginLeft: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  submitHandButton: {
    width: 70,
  }
})
