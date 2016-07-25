import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

// ApplicationController#html = "some <b>html</b> <i>here</i>"

moduleForAcceptance('Acceptance | Sanitizing HTML');

// {{sanitize-html html}}
test("sanitizes HTML with default sanitizer if no config given", function(assert) {
  visit("/");
  andThen(function() {
    var html = find("#sanitized-default").html();
    assert.ok(html.indexOf("some html here") !== -1, "contains sanitized HTML ("+html+")");
  });
});


// {{sanitize-html html "strict"}}
test("looks up config on the container", function(assert) {
  visit("/");
  andThen(function() {
    var html = find("#sanitized-with-config").html();
    assert.ok(html.indexOf("some html <i>here</i>") !== -1, "contains sanitized HTML ("+html+")");
  });
});

