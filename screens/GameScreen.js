import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../constants/colors';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, setGuessRounds, onGameOver}) {

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert(
        "Don't lie!", 
        'You know that this is wrong...', 
        [{
          text: 'Sorry!',
          style: 'cancel'
        }]);
      return;
    }


    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setRounds(prevRounds => [newRndNumber, ...prevRounds]);
    setGuessRounds(prevGuessRound => prevGuessRound + 1);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>   
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
          </View>
        </View>
      </Card>
      <FlatList 
        data={rounds}
        renderItem={(itemData) => (
          <View style={styles.guessLog}>
            <Text style={styles.guessValue}>{itemData.item}</Text>
            <Text style={styles.guessRound}>Guess of Round {rounds.length - itemData.index}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    padding: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  guessLog: {
    borderWidth: 4,
    borderColor: 'white',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  guessValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  guessRound: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  }
})