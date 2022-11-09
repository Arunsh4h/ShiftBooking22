import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import Heading from '../components/Heading';
import Shift from '../components/Shift';
import axios from 'axios';
const url = 'http://127.0.0.1:8080/shifts';
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
    <View>
      <Heading title={'Today'} noOfShift={'2 shifts'} hrs={'4 h'} />
      {shifts?.map((e, i) => (
        <Fragment key={i}>
          <Shift desc={e.area} from={e.startTime} to={e.endTime} />
        </Fragment>
      ))}
    </View>
  );
};

export default ShiftScreen;

const styles = StyleSheet.create({});
