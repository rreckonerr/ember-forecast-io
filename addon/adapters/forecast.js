import $ from 'jquery';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import DS from 'ember-data';

const {
  RESTAdapter
} = DS;

export default RESTAdapter.extend({
  forecast: service(),

  host: alias('forecast.host'),

  pathForType() {
    return null;
  },

  // Include language and unit query parameters in URL.
  urlForFindRecord() {
    let url = this._super(...arguments);
    let query = {
      units: this.get('forecast.units'),
      lang: this.get('forecast.lang')
    };

    return `${url}?${$.param(query)}`;
  }
});
