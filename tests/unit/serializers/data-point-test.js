/* jshint expr:true */
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'ember-forecast-io/data-point',
  'Unit | Serializer | data point',
  {
    // Specify the other units that are required for this test.
    needs: [
      'serializer:ember-forecast-io/data-point',
      'transform:ember-forecast-io/unix-timestamp'
    ]
  },
  function() {
    // Replace this with your real tests.
    it('serializes records', function() {
      let record = this.subject();

      let serializedRecord = record.serialize();

      expect(serializedRecord).to.be.ok;
    });
  }
);
