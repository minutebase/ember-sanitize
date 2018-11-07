import { htmlSafe } from '@ember/template';
import Helper from '@ember/component/helper';
import { sanitize } from 'ember-sanitize/utils/sanitize';
import { getOwner } from '@ember/application';

export default Helper.extend({
  compute(params) {
    let config, configName = params[1];
    if (configName) {
      //lookup the config
      config = getOwner(this).lookup('sanitizer:' + configName);
    }

    let sanitized = sanitize(params[0], config);
    return new htmlSafe(sanitized);
  }
});
