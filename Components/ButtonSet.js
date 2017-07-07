import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export default class ButtonSet extends React.Component {
  render () {
    // define components
    minusButton = (
      <Button
        large
        onPress={() => this.props.handlePlusMinusClick('-')}
        title='-'
        borderRadius={20}
        backgroundColor={'red'}
        containerViewStyle={styles.plusMinusButton}
      />
    )

    evenButton = (
      <Button
        large
        onPress={() => this.props.handlePlusMinusClick('/')}
        title='/'
        borderRadius={20}
        backgroundColor={'red'}
        containerViewStyle={styles.plusMinusButton}
      />
    )

    plusButton = (
      <Button
        large
        onPress={() => this.props.handlePlusMinusClick('+')}
        title='+'
        borderRadius={20}
        backgroundColor={'red'}
        containerViewStyle={styles.plusMinusButton}
      />
    )

    submitButton = (
      <Button
        large
        onPress={() => this.props.handleSubmitClick()}
        title='Submit'
        borderRadius={20}
        backgroundColor={'red'}
        containerViewStyle={styles.submitButton}
      />
    )

    return (
      <View style={styles.buttonContainer}>
        {!this.props.plusMinusSelected && minusButton}
        {!this.props.plusMinusSelected && evenButton}
        {!this.props.plusMinusSelected && plusButton}
        {this.props.plusMinusSelected && submitButton}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  plusMinusButton: {
    width: 70
  },

  submitButton: {
    width: 150
  }
})