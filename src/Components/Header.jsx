import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View 
        style={styles.containerHeader}>
      <Text style ={styles.text}>PUNTO DIGITAL</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: '20%',
        backgroundColor: colors.header,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 25,
        fontFamily: 'Josefin',
        color: colors.white
    }
})