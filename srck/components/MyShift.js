import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MyShift() {
const ListEmptyComponent =()=>{
return (
  <View >
    <Message info message = "Null for now"/>

    
  </View>
)
}


const renderItem  = ({item}) => {

}
  return ( <TouchableOpacity>
    <Text>no 1</Text>
  </TouchableOpacity>
  );
};
return(
  <View>
      <FlatList renderItem ={renderItem} data = {[data]} 
      KeyExtractor = {(item) => String(item.id)}
      ListEmptyComponent = {ListEmptyComponent} />
    </View>
);