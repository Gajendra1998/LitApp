import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableWithoutFeedback } from 'react-native'
import React,{ useEffect,useState} from 'react'

const Home = () => {
  const [isTrue,setIstrue]=useState(false)

  return (
    <SafeAreaView style={{backgroundColor:"red"}} >
    <View style={{ borderWidth: 1, margin: 5,backgroundColor:"grey" }}>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10,marginTop:20}}>
      <Text>button</Text>
      <Text>button</Text>
    </View>
    <Text style={{margin:5,marginLeft:10}}>Hello , James</Text>
    <Text style={{marginLeft:10,marginTop:5}}>Let's Test your knowledge</Text>
    <View style={{margin:10,flexDirection:"row",alignItems:"center",borderRadius:20,backgroundColor:"white"}}>
      <TextInput style={{height:30,flex:1}}></TextInput>
      <Text style={{fontSize:30}}> o</Text>
    </View>
    <View style={{justifyContent:"center",flexDirection:"row"}}>
      <TouchableWithoutFeedback onPress={() => setIstrue(prevCount => !prevCount)}>
      <View style={{borderWidth:1,margin:10,padding:5,paddingHorizontal:17,paddingVertical:8,borderRadius:8,borderColor:"white"}}>
    <Text style={{color:"white",fontWeight:"600",fontSize:16}} >{isTrue==false?"Follow": "Following"}</Text>
    </View>
    </TouchableWithoutFeedback>
    </View>
    </View>
    {/* <View style={{ borderWidth: 1, margin: 5, flex: 1 }}>
      <Text>Hiii</Text>
    </View> */}
  </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    flex: { flex: 1 },
    row: { flexDirection: "row" }
})