/* jshint expr:true */
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'ember-forecast-io/data-block',
  'Unit | Serializer | data block',
  {
    // Specify the other units that are required for this test.
    needs: [
      'serializer:ember-forecast-io/data-block',
      'model:ember-forecast-io/data-point'
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
