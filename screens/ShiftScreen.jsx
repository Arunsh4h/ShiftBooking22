import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import Heading from "../components/Heading";
import Shift from "../components/Shift";
import axios from "axios";
import { Colors } from "../constants/Colors";

import { ScrollView } from "react-native-gesture-handler";
const url = "http://127.0.0.1:8080/shifts";
// const url = "https://reactnative.dev/movies.json"

const ShiftScreen = () => {
  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    const getMoviesFromApi = async () => {
      const res = await axios.get(url);
      setShifts(res.data);
    };

    getMoviesFromApi();
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <ScrollView>
        <View>
          <Heading title={"Today"} noOfShift={"2 shifts"} hrs={"4 h"} />

          {shifts?.map((e, i) => (
            <Fragment key={i}>
              <Shift desc={e.area} from={e.startTime} to={e.endTime} />
            </Fragment>
          ))}
          <Heading title={"Tomorrow"} noOfShift={"2 shifts"} hrs={"4 h"} />
          <Heading title={"Tomorrow"} noOfShift={"2 shifts"} hrs={"4 h"} />
        </View>
        <View style={styles.footerContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShiftScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
  },
  footer: {
    backgroundColor: Colors.grayeshBlue,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  backgroundStyle: {
    flex: 1,
  },
});
