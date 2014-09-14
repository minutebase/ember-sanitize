import { sanitize } from 'ember-sanitize/utils/sanitize';

module('SanitizeHelper');

test('sanitizes with the defaults', function() {
  var result = sanitize("some <b>html</b> here");
  equal(result, "some html here");
});

test('sanitizes with a custom config', function() {
  var config = { elements: ['i'] };
  var result = sanitize("some <b>html</b> <i>here</i>", config);
  equal(result, "some html <i>here</i>");
});

