import Ember from 'ember';
import { sanitize, sanitizeElement } from '../utils/sanitize';

function loadConfig(container, name) {
  if (!name) { return; }
  return container.lookup("sanitizer:"+name);
}

export default Ember.Mixin.create({
  sanitizeElement: function(selector, configName) {
    var element = this.$(selector)[0];
    return sanitizeElement(element, loadConfig(configName));
  },

  sanitizeHTML: function(html, configName) {
    return sanitize(html, loadConfig(configName));
  }
});