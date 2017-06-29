import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'

export default class CardSet extends React.Component {
  render() {
    const spade = (
      <Avatar
        containerStyle={styles.cardButton}
        source={require('./icons/spade.png')}
        large
        rounded
      />
    )

    const club = (
      <Avatar
        containerStyle={styles.cardButton}
        source={require('./icons/club.png')}
        large
        rounded
      />
    )

    const diamond = (
      <Avatar
        containerStyle={styles.cardButton}
        source={require('./icons/diamond.png')}
        large
        rounded
      />
    )

    const heart = (
      <Avatar
        containerStyle={styles.cardButton}
        source={require('./icons/heart.png')}
        large
        rounded
      />
    )

    const card = null
    switch (this.props.card) {
      case ('ace'):
        card = (
          <Avatar
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
            containerStyle={styles.cardButton}
            source={require('./icons/9.png')}
            large
            rounded
          />
        )
        break
    }
    return(
      <View style={styles.buttonContainer}>
        {spade}
        {club}
        {diamond}
        {heart}
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
