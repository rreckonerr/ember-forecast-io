import classic from 'ember-classic-decorator';
import DS from 'ember-data';

const {
  attr,
  belongsTo,
  Model
} = DS;

@classic
export default class ForecastModel extends Model {
  @attr('number')
  latitude;

  @attr('number')
  longitude;

  @attr('string')
  timezone;

  @attr('number')
  offset;

  @belongsTo('forecast-io/data-point')
  currently;

  @belongsTo('forecast-io/data-block')
  hourly;

  @belongsTo('forecast-io/data-block')
  daily;

  @attr()
  alerts;

  @attr()
  flags;
}
