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

    var card = null
    switch (this.props.card) {
      case ('ace'):
        card = (
          <Avatar
            onPress={() => this.props.handleCardClick('ace')}
            containerStyle={styles.cardButton}
            source={require('./icons/ace.png')}
            large
            rounded
          />
        )
        break

      case ('king'):
        card = (
          <Avatar
            onPress={() => this.props.handleCardClick('king')}
            containerStyle={styles.cardButton}
            source={require('./icons/king.png')}
            large
            rounded
          />
        )
        break

      case ('queen'):
        card = (
          <Avatar
            onPress={() => this.props.handleCardClick('queen')}
            containerStyle={styles.cardButton}
            source={require('./icons/queen.png')}
            large
            rounded
          />
        )
        break

      case ('jack'):
        card = (
          <Avatar
            onPress={() => this.props.handleCardClick('jack')}
            containerStyle={styles.cardButton}
            source={require('./icons/jack.png')}
            large
            rounded
          />
        )
        break

      case ('ten'):
        card = (
          <Avatar
            onPress={() => this.props.handleCardClick('ten')}
            containerStyle={styles.cardButton}
            source={require('./icons/10.png')}
            large
            rounded
          />
        )
        break

      case ('nine'):
        card = (
          <Avatar
            onPress={() => this.props.handleCardClick('nine')}
            containerStyle={styles.cardButton}
            source={require('./icons/9.png')}
            large
            rounded
          />
        )
        break
    }

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
