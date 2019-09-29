const eventStore = require("@sustainers/event-store");

/**
 *
 * TODO: write the event store's schema.
 * How to write a schema -> https://mongoosejs.com/docs/schematypes.html
 * Types and validators should always be specified,
 * and default values and required flags should be set if intended.
 *
 */

module.exports = eventStore({
  schema: { name: { type: String } }
});
