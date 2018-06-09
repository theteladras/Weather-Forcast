import axios from 'axios';

const API_KEY = '625e96e3fccaa8d0fc13893d1eea255b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  return (dispatch) => {
    dispatch({ type: 'FETCHING_DATA' });
    axios.get(url)
      .then( (res) => gotData(dispatch, res) )
      .catch( (err) => errorGettingData(dispatch, err) )
    }
}
  const gotData = (dispatch, res) => {
    console.log('got data ', res);
    return dispatch({
      type: FETCH_WEATHER,
      payload: res
    });
  };

  const errorGettingData = (dispatch, err) => {
  console.log('error: ', err);
  return dispatch({
    type: 'FAILED_TO_GET_DATA',
  });
}
