import { sanitize } from 'ember-sanitize/utils/sanitize';
import getOwner from 'ember-getowner-polyfill';
import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    let config, configName = params[1];
    if (configName) {
      //lookup the config
      config = getOwner(this).lookup('sanitizer:' + configName);
    }

    let sanitized = sanitize(params[0], config);
    return new Ember.String.htmlSafe(sanitized);
  }
});
