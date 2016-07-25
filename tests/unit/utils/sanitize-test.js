import { sanitize } from 'ember-sanitize/utils/sanitize';
import { module, test } from 'qunit';

module('SanitizeHelper');

test('sanitizes with the defaults', function(assert) {
  var result = sanitize("some <b>html</b> here");
  assert.equal(result, "some html here");
});

test('sanitizes with a custom config', function(assert) {
  var config = { elements: ['i'] };
  var result = sanitize("some <b>html</b> <i>here</i>", config);
  assert.equal(result, "some html <i>here</i>");
});
