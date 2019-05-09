import React,{Component,useState,useEffect} from 'react';
import {geolocated} from 'react-geolocated';

class Geolocation extends Component {
  render(){
  return(
    !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
              <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
              <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
              <tr><td>TESTING</td><td><a href={`https://www.latlong.net/c/?lat=${this.props.coords.latitude}&long=${this.props.coords.longitude}`}>Click Here</a></td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>
  )}
}
//https://www.latlong.net/c/?lat=40.785091&long=-73.968285
//https://www.latlong.net/c/?lat={this.props.coords.latitude}&long={this.props.coords.longitude}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geolocation)
