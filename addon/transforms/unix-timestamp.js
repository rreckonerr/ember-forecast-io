import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized ? new Date(serialized * 1000) : null;
  },

  serialize(deserialized) {
    return deserialized ? deserialized.getTime() / 1000 : null;
  }
});
