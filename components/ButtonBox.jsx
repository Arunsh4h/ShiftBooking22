import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function ButtonBox({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textBaseColor}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafb",
    padding: 20,
    width: "48%",
    zIndex: 10,
  },
  textBaseColor: {
    color: "#9a9b9b",
    fontWeight: "bold",
    fontSize: 19,
    alignSelf: "center",
  },
});
