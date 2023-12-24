import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Semester1 = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted"/>
      <Text style={styles.text}>Semester 1</Text>
    </View>
  )
}

export default Semester1

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#141414",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color:"white"
    }
})