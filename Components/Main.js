import React from 'react'
import { StyleSheet, View, TouchableOpacity, TouchableHighlight } from 'react-native'

import { Avatar, Button, Text } from 'react-native-elements'

import SuitSet from './SuitSet.js'
import ButtonSet from './ButtonSet.js'
import Card from './Card.js'

import Secrets from '../secrets.json'

export default class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      right: false,
      left: false,
      ace: false,
      king: false,
      queen: false,
      ten: false,
      nine: false,

      plusMinus: null,
      plusMinusSelected: false,

      trump: null,
      trumpSelected: false
    }
  }

  // update state with selected card -- set false if true and vice versa
  handleCardClick = (card, selected) => {
    if (selected) {
      this.setState({ [card]: false})
    } else {
      this.setState({ [card]: true})
    }
  }

  // adds plus/minus to state
  handlePlusMinusClick = (sign) => {
    this.setState({ plusMinus: sign, plusMinusSelected: true })
  }

  // set trump on trump click
  handleTrumpClick = (trump) => {
    this.setState({ trumpSelected: true, trump: trump })
  }

  // send state to parent
  handleMainSubmitClick = () => {
    this.props.handleSubmitClick(this.state)
    this.clearState()
  }

  // wipes the state of this component clean
  clearState = () => {
    this.setState({
      right: false,
      left: false,
      ace: false,
      king: false,
      queen: false,
      ten: false,
      nine: false,

      plusMinus: null,
      plusMinusSelected: false,

      trump: null,
      trumpSelected: false
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => this.clearState()}>
          <Text h3 style={{color: 'white'}}>Queen Nine</Text>
        </TouchableOpacity>
        <View style={styles.cardRow}>
          <Card
            card={'right'}
            handleCardClick={this.handleCardClick}
            selected={this.state.right}
          />
        </View>
        <View style={styles.cardRow}>
          <Card
            card={'left'}
            handleCardClick={this.handleCardClick}
            selected={this.state.left}
          />
          <Card
            card={'ace'}
            handleCardClick={this.handleCardClick}
            selected={this.state.ace}
          />
        </View>
        <View style={styles.cardRow}>
        <Card
            card={'king'}
            handleCardClick={this.handleCardClick}
            selected={this.state.king}
          />
          <Card
            card={'queen'}
            handleCardClick={this.handleCardClick}
            selected={this.state.queen}
          />
        </View>
        <View style={styles.cardRow}>
          <Card
            card={'ten'}
            handleCardClick={this.handleCardClick}
            selected={this.state.ten}
          />
          <Card
            card={'nine'}
            handleCardClick={this.handleCardClick}
            selected={this.state.nine}
          />
        </View>
        {this.state.trumpSelected ? 
          <ButtonSet 
            handlePlusMinusClick={this.handlePlusMinusClick}
            handleSubmitClick={this.handleMainSubmitClick}
            plusMinusSelected={this.state.plusMinusSelected}
          /> :
          <SuitSet 
            handleSuitClick={this.handleTrumpClick}
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
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
