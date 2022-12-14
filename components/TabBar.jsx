import { StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const TabBar = ({ tabAttributes, setTab }) => {
  return (
    <View style={styles.container}>
      {tabAttributes.map((e, i) => (
        <Fragment key={i}>
          <TouchableOpacity
            onPress={() => {
              setTab(e.name);
            }}
          >
            <Text style={styles.tabText}>
              {e.name} ({e.count})
            </Text>
          </TouchableOpacity>
        </Fragment>
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
