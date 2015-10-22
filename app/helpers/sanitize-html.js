import { sanitize } from 'ember-sanitize/utils/sanitize';
import Ember from 'ember';

export default Ember.HTMLBars.makeBoundHelper(function(html, configName, options) {
  if (arguments.length === 2) {
    options    = configName;
    configName = null;
  }

  var config;
  if (configName) {
    var data      = options.data;
    var container = this.container || (data && data.view && data.view.container);
    config    = container.lookup("sanitizer:"+configName);
  }

  var sanitized = sanitize(html, config);
  return new Ember.String.htmlSafe(sanitized);
});
