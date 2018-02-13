import DS from 'ember-data';

const {
  Transform
} = DS;

export default Transform.extend({
  deserialize(serialized) {
    return new Date(serialized * 1000);
  },

  serialize(deserialized) {
    return deserialized ? (deserialized.getTime() / 1000) : null;
  }
});
