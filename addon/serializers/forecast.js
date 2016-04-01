import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    currently: {
      serialize: false,
      deserialize: 'records'
    },
    hourly: {
      serialize: false,
      deserialize: 'records'
    },
    daily: {
      serialize: false,
      deserialize: 'records'
    }
  },

  normalizeResponse(store, modelClass, payload, recordId, requestType) {
    let typeKey = modelClass.modelName;
    let newPayload = {};
    newPayload[typeKey] = payload;
    newPayload[typeKey].id = recordId;

    return this._super(store, modelClass, newPayload, recordId, requestType);
  }
});
