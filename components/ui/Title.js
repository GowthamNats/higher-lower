import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      borderWidth: 2,
      borderColor: 'white',
      padding: 12,
      marginBottom: 16
    }
  })