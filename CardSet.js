import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import Icons from './icons/Icons.js'

export default class CardSet extends React.Component {
  render() {
    // define the suit avatars
    const spade = (
      <Avatar
        onPress={() => this.props.handleSuitClick('spade')}
        containerStyle={styles.cardButton}
        source={Icons.spade}
        large
        rounded
      />
    )

    const club = (
      <Avatar
        onPress={() => this.props.handleSuitClick('club')}
        containerStyle={styles.cardButton}
        source={Icons.club}
        large
        rounded
      />
    )

    const diamond = (
      <Avatar
        onPress={() => this.props.handleSuitClick('diamond')}
        containerStyle={styles.cardButton}
        source={Icons.diamond}
        large
        rounded
      />
    )

    const heart = (
      <Avatar
        onPress={() => this.props.handleSuitClick('heart')}
        containerStyle={styles.cardButton}
        source={Icons.heart}
        large
        rounded
      />
    )

    // define other avatar
    // if it already has a value, show the suit icon
    // else, show the card icon
    var cardIcon = null

    if (this.props.cardSuit) {
      switch (this.props.cardSuit) {
        case ('spade'):
          cardIcon = Icons.spade
          break
        case ('club'):
          cardIcon = Icons.club
          break
        case ('diamond'):
          cardIcon = Icons.diamond
          break
        case ('heart'):
          cardIcon = Icons.heart
          break
      }
    } else {
      switch (this.props.card) {
        case ('ace'):
          cardIcon = Icons.ace
          break
        case ('king'):
          cardIcon = Icons.king
          break
        case ('queen'):
          cardIcon = Icons.queen
          break
        case ('jack'):
          cardIcon = Icons.jack
          break
        case ('ten'):
          cardIcon = Icons.ten
          break
        case ('nine'):
          cardIcon = Icons.nine
          break
      }
    }

    card = (
      <Avatar
        onPress={() => this.props.handleCardClick(this.props.card)}
        containerStyle={styles.cardButton}
        source={cardIcon}
        large
        rounded
      />)

    // check to see if card has been clicked
    var showSuits = false
    if (this.props.card === this.props.cardSelected) {
      showSuits = true
    }

    return(
      <View style={styles.buttonContainer}>
        {showSuits && spade}
        {showSuits && club}
        {!showSuits && card}
        {showSuits && diamond}
        {showSuits && heart}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardButton: {
    marginRight: 10,
    marginLeft: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
