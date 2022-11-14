import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ButtonBox from "../components/ButtonBox";
import TabBar from "../components/TabBar";

export default function Available({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <TabBar />
      </View>

      <View style={styles.row}>
        <ButtonBox
          title="My shifts"
          onPress={() => navigation.navigate("Available")}
        />
        <ButtonBox
          title="Available Shifts"
          onPress={() => navigation.navigate("Shift")}
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
    bottom: 80,
    justifyContent: "center",
  },
});
