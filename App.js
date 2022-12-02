import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ margin: 5, flexDirection: "row", justifyContent:"space-between", borderWidth: 1 }}>
        <Text>Welcome to my blog</Text>
        <Text>Lets Start</Text>
      </View>
    </SafeAreaView>
  )
}

export default App
const styles = StyleSheet.create({})