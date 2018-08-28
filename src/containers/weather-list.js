import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {

  renderWeather(cityData) {
    

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><Chart color="orange" units="F" /></td>
        <td><Chart color="green" units="hPa" /></td>
        <td><Chart color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
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
