import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TabBar = ({ tabAttributes }) => {
  return (
    <View style={styles.container}>
      {tabAttributes.map((e, i) => (
        <View>
          <Text style={styles.tabText}>
            {e.name} ({e.count})
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 18,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
});
