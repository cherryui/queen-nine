import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import Icons from './icons/Icons.js'

export default class Card extends React.Component {
  render () {
    // get icon based on props
    var icon = null
    switch (this.props.card) {
      case ('right'):
        icon = Icons.right
        break
      case ('left'):
        icon = Icons.left
        break
      case ('ace'):
        icon = Icons.ace
        break
      case ('king'):
        icon = Icons.king
        break
      case ('queen'):
        icon = Icons.queen
        break
      case ('ten'):
        icon = Icons.ten
        break
      case ('nine'):
        icon = Icons.nine
        break
    }

    // check if card has already been chosen -- if so, display check
    if (this.props.selected) {
      icon = Icons.success
    }
    return (
      <Avatar
        onPress={() => this.props.handleCardClick(this.props.card, this.props.selected)}
        containerStyle={styles.cardButton}
        source={icon}
        large
        rounded
      />
    )
  }
}

const styles = StyleSheet.create({
  cardButton: {
    marginRight: 10,
    marginLeft: 10
  }
})