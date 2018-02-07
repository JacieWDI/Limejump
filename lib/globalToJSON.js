function globalToJSON(schema) {
  schema.set('toJSON', {
    virtuals: true,
    transform: function(obj, json) {
      delete json._id;
      delete json.__v;
    }
  });
}

module.exports = globalToJSON;
