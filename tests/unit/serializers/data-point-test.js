import { moduleForModel, test } from 'ember-qunit';

moduleForModel('forecast-io/data-point', 'Unit | Serializer | data point', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:forecast-io/data-point',
    'transform:unix-timestamp'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
