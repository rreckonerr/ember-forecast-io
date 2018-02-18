import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:forecast-io/forecast', 'Unit | Adapter | forecast', {
  // Specify the other units that are required for this test.
  needs: [
    'service:forecast'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
