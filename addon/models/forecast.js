import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  timezone: DS.attr('string'),
  offset: DS.attr('number'),

  currently: DS.belongsTo('ember-forecast-io/data-point'),
  hourly: DS.belongsTo('ember-forecast-io/data-block'),
  daily: DS.belongsTo('ember-forecast-io/data-block'),
  alerts: DS.attr(),
  flags: DS.attr()
});
