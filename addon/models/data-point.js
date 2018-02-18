import DS from 'ember-data';

const {
  attr,
  Model
} = DS;

export default Model.extend({
  time: attr('unix-timestamp'),
  summary: attr('string'),
  icon: attr('string'),
  sunriseTime: attr('unix-timestamp'),
  sunsetTime: attr('unix-timestamp'),
  moonPhase: attr('number'),
  nearestStormDistance: attr('number'),
  nearestStormBearing: attr('number'),
  precipIntensity: attr('number'),
  precipIntensityMax: attr('number'),
  precipIntensityMaxTime: attr('unix-timestamp'),
  precipProbability: attr('number'),
  precipType: attr('string'),
  precipAccumulation: attr('number'),
  temperature: attr('number'),
  temperatureMin: attr('number'),
  temperatureMinTime: attr('unix-timestamp'),
  temperatureMax: attr('number'),
  temperatureMaxTime: attr('unix-timestamp'),
  apparentTemperature: attr('number'),
  apparentTemperatureMin: attr('number'),
  apparentTemperatureMinTime: attr('unix-timestamp'),
  apparentTemperatureMax: attr('number'),
  apparentTemperatureMaxTime: attr('unix-timestamp'),
  dewPoint: attr('number'),
  windSpeed: attr('number'),
  windBearing: attr('number'),
  cloudCover: attr('number'),
  humidity: attr('number'),
  pressure: attr('number'),
  visibility: attr('number'),
  ozone: attr('number')
});
