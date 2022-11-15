import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { convertMsToTime } from "../utils/helper";

const Shift = ({ from, to, desc, status }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.timing}>
          <Text style={styles.fromToText}>{convertMsToTime(from)}</Text>
          <Text style={styles.fromToText}>-</Text>
          <Text style={styles.fromToText}>{convertMsToTime(to)}</Text>
        </View>
        <View>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            ...styles.statusText,
            color: status ? "#4F6C92" : "#E2006A",
          }}
        >
          {status && "Booked"}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            ...styles.cancelBtn,
            borderColor: status ? "#E2006A" : "#A4B8D3",
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              ...styles.cancelBtnTxt,

              color: status ? "#E2006A" : "#A4B8D3",
            }}
          >
            {status ? "Cancel" : "Book"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shift;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  info: {
    fontSize: 20,
  },
  fromToText: {
    fontSize: 20,
  },
  timing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descText: {
    fontSize: 20,
    color: Colors.lightGrayeshBlue,
  },
  cancelBtn: {
    borderWidth: 2,

    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  cancelBtnTxt: {
    fontSize: 20,
    fontWeight: "600",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  BookedTextColor: {
    color: "#4F6C92",
  },
  overLapTextColor: {
    color: "#E2006A",
  },
});
