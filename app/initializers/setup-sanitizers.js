export default {
  name: 'ember-sanitize-setup-sanitizers',

  initialize(container) {
    container.registerOptionsForType('sanitizer', { instantiate: false });
  }
};
