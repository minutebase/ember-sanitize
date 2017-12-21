import Ember from 'ember';
import { sanitize } from 'ember-sanitize/utils/sanitize';

const { getOwner } = Ember;

export default Ember.Helper.extend({
  compute([input, configName]) {
    let config;
    if (configName) {
      config = getOwner(this).lookup('sanitizer:' + configName);
    }

    let sanitized = sanitize(input, config);
    return new Ember.String.htmlSafe(sanitized);
  }
});
