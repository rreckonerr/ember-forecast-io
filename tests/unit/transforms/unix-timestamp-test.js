/* jshint expr:true */
import { expect } from 'chai';
import { describe } from 'mocha';
import { describeModule, it } from 'ember-mocha';

describeModule(
  'transform:ember-forecast-io/unix-timestamp',
  'Unit | Transform | unix timestamp',
  {
    // Specify the other units that are required for this test.
    // needs: ['transform:foo']
  },
  function() {
    describe('deserialize', function() {
      it('exists', function() {
        let transform = this.subject();
        expect(transform.deserialize).to.be.ok;
      });

      it('transforms a Date into a Unix timestamp', function() {
        let transform = this.subject();
        let date = new Date();
        let unixTimestamp = date.getTime() / 1000;
        expect(transform.deserialize(unixTimestamp)).to.be.eql(date);
      });
    });

    describe('serialize', function() {
      it('exists', function() {
        let transform = this.subject();
        expect(transform.serialize).to.be.ok;
      });

      it('transforms a Unix timestamp into a date', function() {
        let transform = this.subject();
        let date = new Date();
        let unixTimestamp = date.getTime() / 1000;
        expect(transform.serialize(date)).to.be.eq(unixTimestamp);
      });
    });
  }
);
