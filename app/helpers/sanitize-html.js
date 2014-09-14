import { sanitize } from 'ember-sanitize/utils/sanitize';
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(html, configName, options) {
  if (arguments.length === 2) {
    options    = configName;
    configName = null;
  }

  var config;
  if (configName) {
    var data      = options.data;
    var container = this.container || (data && data.view && data.view.container);
    var config    = container.lookup("sanitizer:"+configName);
  }

  var sanitized = sanitize(html, config);
  return new Ember.Handlebars.SafeString(sanitized);
});
