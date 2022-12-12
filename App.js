import { StyleSheet, View,Text,ScrollView} from 'react-native'
import React from 'react'
import Home from './src/Home'

const App = () => {
  return (
    <View style={[]}>
    <Home/>
    <Home/>
    </View>

  )
}
export default App
const styles = StyleSheet.create({
  flex: { flex: 1 },
})