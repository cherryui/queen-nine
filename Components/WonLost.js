import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'

export default class WonLost extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text h3 style={{color: 'white'}}>Did you win or lose?</Text>
        <Button
          onPress={() => this.props.handleWinLossClick(true)}
          title='Won'
          borderRadius={20}
          backgroundColor={'orange'}
          containerViewStyle={styles.button}
          disabled={this.props.fetching}
        />
        <Button
          onPress={() => this.props.handleWinLossClick(false)}
          title='Lost'
          borderRadius={20}
          backgroundColor={'orange'}
          containerViewStyle={styles.button}
          disabled={this.props.fetching}
        />
        <Button
          large
          onPress={() => this.props.handleBackClick()}
          title='Back'
          borderRadius={20}
          backgroundColor={'red'}
          containerViewStyle={{width: 150}}
        />
        <Text h4 style={{color: 'orange'}}>{this.props.errors}</Text>
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

  button: {
    width: 250,
    height: 200
  }
})
