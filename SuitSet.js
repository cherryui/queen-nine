import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import Icons from './icons/Icons.js'

export default class SuitSet extends React.Component {
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
