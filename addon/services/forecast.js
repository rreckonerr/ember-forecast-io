import Service, { inject as service } from '@ember/service';
import { on } from '@ember/object/evented';
import { warn } from '@ember/debug';
import { getWithDefault, observer } from '@ember/object';
import { getOwner } from '@ember/application';

const DEFAULTS = {
  units: 'us',
  lang: 'en',
  host: 'http://localhost/forecast'
};

export default Service.extend({
  // Service
  store: service(),

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
    let ENV = getOwner(this).resolveRegistration('config:environment');
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
