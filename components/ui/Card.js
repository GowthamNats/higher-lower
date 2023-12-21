import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // Shadow for android
        shadowColor: 'black', // Shadow for iOS
        shadowOffset: { width: 0, height: 2}, // Shadow for iOS
        shadowRadius: 6, // Shadow for iOS
        shadowOpacity: 0.25 // Shadow for iOS
    }
});