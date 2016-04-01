import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    dataPoints: {
      key: 'data',
      serialize: false,
      deserialize: 'records'
    }
  },

  normalize(modelClass, resourceHash, prop) {
    resourceHash.id = this._generateUUID();

    return this._super(modelClass, resourceHash, prop);
  },

  _generateUUID() {
    let r = function(s) {
      let p = (`${Math.random().toString(16)}000000000`).substr(2, 8);
      return s ? `-${p.substr(0, 4)}-${p.substr(4, 4)}` : p;
    };
    return r() + r(1) + r(1) + r();
  }
});
