import DS from 'ember-data';

const {
  attr,
  hasMany,
  Model
} = DS;

export default Model.extend({
  summary: attr('string'),
  icon: attr('string'),
  dataPoints: hasMany('forecast-io/data-point')
});
