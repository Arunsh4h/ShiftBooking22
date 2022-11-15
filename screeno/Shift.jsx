import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ButtonBox from "../components/ButtonBox";
import ShiftScreen from "../screens/ShiftScreen";

export default function Shift({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ShiftScreen navigation={navigation} />
      <Text>Shift</Text>
      <View style={styles.row}>
        <ButtonBox
          title="My shifts"
          onPress={() => navigation.navigate("Shift")}
        />
        <ButtonBox
          title="Available shifts"
          onPress={() => navigation.navigate("Available")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    width: "100%",
    bottom: 0,
    justifyContent: "space-evenly",
    backgroundColor: "#fafafb",
  },
});
