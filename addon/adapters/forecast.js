import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  forecast: Ember.inject.service(),

  host: Ember.computed.alias('forecast.host'),

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

    return `${url}?${Ember.$.param(query)}`;
  }
});
