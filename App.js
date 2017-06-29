import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { Avatar, Button, Text } from 'react-native-elements'

import CardSet from './CardSet.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cardSelected: null
    }
  }

  // callback for when a card is clicked
  // sets that as the current selected card in state
  handleCardClick = (card) => {
    this.setState({ cardSelected: card })
    console.log(this.state)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text h3 style={{color: 'white'}}>Euchre Call</Text>
        <CardSet 
          card='ace'
          handleCardClick={this.handleCardClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='king'
          handleCardClick={this.handleCardClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='queen'
          handleCardClick={this.handleCardClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='jack'
          handleCardClick={this.handleCardClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='ten'
          handleCardClick={this.handleCardClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='nine'
          handleCardClick={this.handleCardClick}
          cardSelected={this.state.cardSelected}
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
