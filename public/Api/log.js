import axios from 'axios';

const callErrorLog = (gameId) => {
  const url = 'http://localhost:8080/Log/Error';
  return axios.post(url).then((response) => response);
};

export default callErrorLog;
