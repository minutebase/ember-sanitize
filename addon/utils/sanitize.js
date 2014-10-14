/* global Sanitize */

function sanitizeElement(element, config) {
  var sanitizer = new Sanitize(config);
  var cleaned   = document.createElement('div');

  cleaned.appendChild(sanitizer.clean_node(element));
  return cleaned.innerHTML;
}

function sanitize(html, config) {
  var container = document.createElement('div');
  container.innerHTML = html;
  return sanitizeElement(container, config);
}

export {
  sanitize,
  sanitizeElement
};