/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'service:forecast',
  'ForecastService',
  {
    // Specify the other units that are required for this test.
    needs: [
      'model:ember-forecast-io/data-block',
      'model:ember-forecast-io/data-point',
      'model:ember-forecast-io/forecast'
    ]
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      let service = this.subject();
      expect(service).to.be.ok;
    });
  }
);
