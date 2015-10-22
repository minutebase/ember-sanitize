import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

// ApplicationController#html = "some <b>html</b> <i>here</i>"
// as setup in dummy app

function setup() {
  App = startApp();
}

function teardown() {
  Ember.run(App, 'destroy');
}

module('Acceptance: Sanitizing HTML', {
  setup:    setup,
  teardown: teardown
});

// {{sanitize-html html}}
test("sanitizes HTML with default sanitizer if no config given", function() {
  visit("/");
  andThen(function() {
    var html = find("#sanitized-default").html();
    ok(html.indexOf("some html here") !== -1, "contains sanitized HTML ("+html+")");
  });
});


// {{sanitize-html html "strict"}}
test("looks up config on the container", function() {
  visit("/");
  andThen(function() {
    var html = find("#sanitized-with-config").html();
    //ok(html.indexOf("some html <i>here</i>") !== -1, "contains sanitized HTML ("+html+")");
    equal(html, '');
  });
});
