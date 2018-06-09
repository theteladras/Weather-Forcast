import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => (weather.main.temp - 273.15));
    const press = cityData.list.map(weather => weather.main.pressure);
    const humy = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;




    console.log("THIS IS THE TEMP: ", temps)
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="orange" units="°C" />
        </td>
        <td>
          <Chart data={press} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humy} color="purple" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (k)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
