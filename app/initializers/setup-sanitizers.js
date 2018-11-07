export default {
  name: 'ember-sanitize-setup-sanitizers',

  initialize: function(container) {
    if (container.registerOptionsForType) {
      container.registerOptionsForType('sanitizer', { instantiate: false });
    } else {
      // Ember < 2
      container.optionsForType('sanitizer', { instantiate: false });
    }
  }
};
