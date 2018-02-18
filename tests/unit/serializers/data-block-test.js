import { moduleForModel, test } from 'ember-qunit';

moduleForModel('forecast-io/data-block', 'Unit | Serializer | data block', {
  // Specify the other units that are required for this test.
  needs: [
    'model:forecast-io/data-point',
    'serializer:forecast-io/data-block',
    'transform:unix-timestamp'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
