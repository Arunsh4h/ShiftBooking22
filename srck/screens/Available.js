import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import ButtonBox from '../components/ButtonBox'


export default function Available({navigation}) {
  return (
    <View style= {{flex:1}} >
      <Text>available</Text>
      
     
  <View style = {styles.row}>
  <ButtonBox title="My shifts" onPress={()=> navigation.navigate('Shift')}/> 
  <ButtonBox title="Available Shifts" onPress={()=> navigation.navigate('Available')}/> 
  

  </View>
    


    </View>
  )
}
const styles = StyleSheet.create({
  row:{
flexDirection: "row",
alignItems : "center",
alignSelf : "center",
      position: "absolute",
      width:"100%",
      bottom : 80,
      justifyContent : "center"
  
  }
})