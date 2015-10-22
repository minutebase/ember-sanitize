import Ember from 'ember';

export default {
  name: 'ember-sanitize-setup-sanitizers',

  initialize: function(container) {
    container.registerOptionsForType('sanitizer', { instantiate: false });
  }
};
