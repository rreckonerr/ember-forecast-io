import DS from 'ember-data';

const {
  attr,
  belongsTo,
  Model
} = DS;

export default Model.extend({
  latitude: attr('number'),
  longitude: attr('number'),
  timezone: attr('string'),
  offset: attr('number'),

  currently: belongsTo('forecast-io/data-point'),
  hourly: belongsTo('forecast-io/data-block'),
  daily: belongsTo('forecast-io/data-block'),
  alerts: attr(),
  flags: attr()
});
