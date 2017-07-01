import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { Avatar, Button, Text } from 'react-native-elements'

import CardSet from './CardSet.js'
import ButtonSet from './ButtonSet.js'

import Secrets from './secrets.json'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cardSelected: null,

      ace: null,
      king: null,
      queen: null,
      jack: null,
      ten: null,
      nine: null,

      plusMinus: null,
      plusMinusSelected: false,

      trump: null,
      trumpSelected: false,

      wonHand: null,

      submitted: false
    }
  }

  // callback for when a card is clicked
  // sets that as the current selected card in state
  handleCardClick = (card) => {
    this.setState({ cardSelected: card })
  }

  // callback for when a suit is clicked
  // adds that card with that suit to state
  // and sets cardSelected to null
  handleSuitClick = (suit) => {
    switch (this.state.cardSelected) {
      case ('ace'):
        this.setState({ace: suit })
        break
      case ('king'):
        this.setState({ king: suit })
        break
      case ('queen'):
        this.setState({ queen: suit })
        break
      case ('jack'):
        this.setState({ jack: suit })
        break
      case ('ten'):
        this.setState({ ten: suit })
        break
      case ('nine'):
        this.setState({ nine: suit })
        break
    }

    this.setState({ cardSelected: null })
  }

  // adds plus/minus to state
  handlePlusMinusClick = (sign) => {
    this.setState({ plusMinus: sign, plusMinusSelected: true })
  }

  // set trump on trump click
  handleTrumpClick = (trump) => {
    this.setState({ trumpSelected: true, trump: trump })
  }

  // send a POST request to server with the hand, trump and plus-minus
  handleSubmitClick = () => {
    // this.setState({ 
    //   cardSelected: null,

    //   ace: null,
    //   king: null,
    //   queen: null,
    //   jack: null,
    //   ten: null,
    //   nine: null,

    //   plusMinus: null,
    //   plusMinusSelected: false,

    //   trump: null,
    //   trumpSelected: false
    // })
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.mainContainer}>
        <Text h3 style={{color: 'white'}}>Euchre Call</Text>
        <CardSet 
          card='ace'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
          cardSuit={this.state.ace}
        />
        <CardSet 
          card='king'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
          cardSuit={this.state.king}
        />
        <CardSet 
          card='queen'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
          cardSuit={this.state.queen}
        />
        <CardSet 
          card='jack'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
          cardSuit={this.state.jack}
        />
        <CardSet 
          card='ten'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
          cardSuit={this.state.ten}
        />
        <CardSet 
          card='nine'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
          cardSuit={this.state.nine}
        />
        {this.state.trumpSelected ? 
          <ButtonSet 
            handlePlusMinusClick={this.handlePlusMinusClick}
            handleSubmitClick={this.handleSubmitClick}
            plusMinusSelected={this.state.plusMinusSelected}
          /> :
          <CardSet 
            card='trump'
            handleSuitClick={this.handleTrumpClick}
            cardSelected={'trump'}
          /> }
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
  }
})
