import DS from 'ember-data';

const {
  EmbeddedRecordsMixin,
  RESTSerializer
} = DS;

export default RESTSerializer.extend(EmbeddedRecordsMixin, {
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
