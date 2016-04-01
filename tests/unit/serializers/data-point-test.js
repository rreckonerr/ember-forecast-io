import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-point', 'Unit | Serializer | data point', {
  // Specify the other units that are required for this test.
  needs: ['serializer:data-point']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
