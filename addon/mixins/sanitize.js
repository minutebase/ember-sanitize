import Mixin from '@ember/object/mixin';
import { sanitize, sanitizeElement } from '../utils/sanitize';
import { getOwner } from '@ember/application';

function loadConfig(container, name) {
  if (name) {
    return container.lookup(`sanitizer:${name}`);
  }
}

export default Mixin.create({
  sanitizeElement: function(selector, configName) {
    var element = this.$(selector)[0];
    return sanitizeElement(element, loadConfig(this.container, configName));
  },

  sanitizeHTML: function(html, configName) {
    return sanitize(html, loadConfig(getOwner(this), configName));
  }
});
