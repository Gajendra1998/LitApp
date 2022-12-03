import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.row,{ margin: 5,flexWrap:"wrap", justifyContent:"space-between" }]}>
        <Text style={{fontSize:18,fontWeight:"bold",}}>Welcome to my blog</Text>
        
      </View>
    </SafeAreaView>
  )
}

export default App
const styles = StyleSheet.create({
  flex:{flex:1},
  row:{flexDirection:"row"}
})