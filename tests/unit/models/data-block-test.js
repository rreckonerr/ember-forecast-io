/* jshint expr:true */
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'ember-forecast-io/data-block',
  'Unit | Model | data block',
  {
    // Specify the other units that are required for this test.
    needs: ['model:ember-forecast-io/data-point']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      let model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });
  }
);
