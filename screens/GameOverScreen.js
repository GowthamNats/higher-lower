import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton'

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <Text style={styles.text}>The number {userNumber} was guessed in {roundsNumber} rounds!</Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30
  }
})