import { sanitize } from 'ember-sanitize/utils/sanitize';
import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    let config, configName = params[1];
    if (configName) {
      //lookup the config
      config = this.container.lookup('sanitizer:' + configName);
    }

    let sanitized = sanitize(params[0], config);
    return new Ember.String.htmlSafe(sanitized);
  }
});
