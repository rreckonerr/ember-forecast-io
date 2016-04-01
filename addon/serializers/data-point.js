import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize(modelClass, resourceHash, prop) {
    resourceHash.id = resourceHash.time;

    return this._super(modelClass, resourceHash, prop);
  }
});
