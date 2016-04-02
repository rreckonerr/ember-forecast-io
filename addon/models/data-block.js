import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr('string'),
  icon: DS.attr('string'),
  dataPoints: DS.hasMany('ember-forecast-io/data-point')
});
