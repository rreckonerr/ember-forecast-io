import DS from 'ember-data';

const {
  RESTSerializer
} = DS;

export default RESTSerializer.extend({
  normalize(modelClass, resourceHash, prop) {
    resourceHash.id = resourceHash.time;

    return this._super(modelClass, resourceHash, prop);
  }
});
