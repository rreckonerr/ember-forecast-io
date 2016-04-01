import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const { on, observer, warn, getWithDefault } = Ember;

const DEFAULTS = {
  units:  'us',
  lang:   'en',
  host:   'http://localhost/forecast'
};

export default Ember.Service.extend({
  // Service
  store: Ember.inject.service(),

  // @public
  // The Forecast.io proxy host.
  host: null,

  // @public
  // Units being returned by Forecast.io.
  units: null,

  // @public
  // Language being used by Forecast.io in texts.
  lang: null,

  // @public
  // Request weather forecast at specific location.
  forecast(latitude, longitude) {
    let id = `${latitude},${longitude}`;
    return this.get('store').findRecord('forecast-io/forecast', id);
  },

  // @public
  // Request weather forecast at specific location at point in time.
  forecastAt(latitude, longitude, date) {
    let id = `${latitude},${longitude},${date.getTime() / 1000}`;
    return this.get('store').findRecord('forecast-io/forecast', id);
  },

  // @private
  _initDefaults: on('init', function() {
    let ENV = getOwner(this)._lookupFactory('config:environment');
    let config = ENV['ember-forecast-io'] || {};

    if (config.host == null) {
      warn(`ember-forecast-io did not find a host setting, default to ${DEFAULTS.host}`, false, { id: 'ember-forecast-io.host' });
    }

    for (let property of ['units', 'lang', 'host']) {
      this.set(property, getWithDefault(config, property, DEFAULTS[property]));
    }
  }),

  // @private
  _clearCachedForecasts: observer('units', 'lang', function() {
    let store = this.get('store');

    for (let modelName of ['forecast', 'data-block', 'data-point']) {
      store.unloadAll(`forecast-io/${modelName}`);
    }
  })
});
