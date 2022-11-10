import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, } from 'react-native';
import ShiftScreen from "../screens/ShiftScreen";
import { Colors } from "../constants/Colors"


export default function AvailableScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          
        >
          <View>
            
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity style = {{flex : 1}} onPress={() => navigation.navigate('Details')}>
            <Text style = {styles.footer}>MyShift</Text>
          </TouchableOpacity>
          <TouchableOpacity  style = {{flex : 1}} onPress={() => navigation.navigate('Home')}>
            <Text style = {styles.footer}>MyShift</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
  },
  footer: {
    backgroundColor: Colors.grayeshBlue,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    display : 'flex',
    textAlign : 'center',
  
  },
  footerContainer : {
    display :'flex',
    flexDirection : 'row',
  
   
  },
  backgroundStyle : {
    flex : 1,
  }
});
