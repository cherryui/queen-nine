import React from 'react'
import { StyleSheet, View, TouchableOpacity, TouchableHighlight } from 'react-native'

import { Avatar, Button, Text, Icon } from 'react-native-elements'

import SuitSet from './SuitSet.js'
import ButtonSet from './ButtonSet.js'
import Card from './Card.js'
import WonLost from './WonLost'

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

  // send state to parent, unless user isn't logged in
  handleMainSubmitClick = () => {
    if (this.props.username) {
      this.props.handleSubmitClick(this.state)
      this.clearState()
    } else {
      this.props.handleRightUserClick()
    }
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
        <Icon
          name='group-add'
          color='white'
          visible={!this.props.username}
          size={40}
          style={styles.leftUserIcon}
          onPress={() => this.props.handleLeftUserClick()}
        />
        <TouchableOpacity onPress={() => this.clearState()}>
          <Text h3 style={{color: 'white'}}>Queen Nine</Text>
        </TouchableOpacity>
        <Icon
          name='mood'
          color='white'
          size={40}
          style={styles.rightUserIcon}
          onPress={() => this.props.handleRightUserClick()}
        />
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
  },

  rightUserIcon: {
    position: 'absolute', 
    right: 15, 
    top: 23
  },

  leftUserIcon: {
    position: 'absolute', 
    left: 15, 
    top: 23
  }
})
