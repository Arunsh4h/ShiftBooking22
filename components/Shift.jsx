import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/Colors";
import { bookShift, cancelShift, convertMsToTime } from "../utils/helper";
import axios from "axios";

const currentTime = Date.now();

const Shift = ({ from, to, desc, status, id, setShiftInteraction }) => {
  const [shiftStatus, setShiftStatus] = useState(status);
  const handleBooking = async () => {
    if (!shiftStatus) {
      bookShift(id)
        .then((res) => {
          let data = res.data;
          setShiftStatus(!shiftStatus);
        })
        .catch((err) => {
          console.log(err);
        });
      // const res = await cancelShift(id, setShiftInteraction)
    } else {
      cancelShift(id)
        .then((res) => {
          let data = res.data;
          console.log(data);
          setShiftStatus(!shiftStatus);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
            color: shiftStatus ? "#4F6C92" : "#E2006A",
          }}
        >
          {Date.now() > from ? "Overlapped" : shiftStatus && "Booked"}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            ...styles.cancelBtn,
            borderColor: shiftStatus ? "#E2006A" : "#A4B8D3",
          }}
          onPress={() => {
            handleBooking();
          }}
        >
          <Text
            style={{
              ...styles.cancelBtnTxt,

              color: shiftStatus ? "#E2006A" : "#A4B8D3",
            }}
          >
            {shiftStatus ? "Cancel" : "Book"}
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
