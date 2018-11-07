import { find, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Sanitizing HTML', function(hooks) {
  setupApplicationTest(hooks);

  // {{sanitize-html html}}
  test("sanitizes HTML with default sanitizer if no config given", async function(assert) {
    await visit("/");
    var html = find("#sanitized-default").innerHTML;
    assert.ok(html.indexOf("some html here") !== -1, "contains sanitized HTML ("+html+")");
  });


  // {{sanitize-html html "strict"}}
  test("looks up config on the container", async function(assert) {
    await visit("/");
    var html = find("#sanitized-with-config").innerHTML;
    assert.ok(html.indexOf("some html <i>here</i>") !== -1, "contains sanitized HTML ("+html+")");
  });
});

