import Ember from 'ember';
import { sanitize, sanitizeElement } from '../utils/sanitize';

const { getOwner } = Ember;

function loadConfig(container, name) {
  if (name) {
    return container.lookup(`sanitizer:${name}`);
  }
}

export default Ember.Mixin.create({
  sanitizeElement(selector, configName) {
    var element = this.$(selector)[0];
    return sanitizeElement(element, loadConfig(this.container, configName));
  },

  sanitizeHTML(html, configName) {
    return sanitize(html, loadConfig(getOwner(this), configName));
  }
});
