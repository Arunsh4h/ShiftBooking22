/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
//  import {Header} from 'react-native/Libraries/NewAppScreen';
 import {Colors} from './constants/Colors';
 import ShiftScreen from './screens/ShiftScreen';
 
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar
       // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
       // backgroundColor={backgroundStyle.backgroundColor}
       />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View>
           <ShiftScreen />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: Colors.bg,
   },
 });
 
 export default App;
 