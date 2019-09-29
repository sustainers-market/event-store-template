const eventStore = require("@sustainers/view-store");

/**
 *
 * TODO: write the event store's schema.
 * How to write a schema -> https://mongoosejs.com/docs/schematypes.html
 * Types should always be specified for documentation purposes.
 * Validators, default values, and required flags should not be set.
 *
 */

module.exports = eventStore({
  schema: { name: { type: String } }
});
