import axios from 'axios';

export const getShifts = () => {
  return axios.get('http://127.0.0.1:8080/shifts');
};
