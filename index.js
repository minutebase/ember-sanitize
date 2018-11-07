/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sanitize',

  included: function(app, parentAddon) {
    // var target = (parentAddon || app);
    // this._super.included(target);
    // target.import('bower_components/sanitize.js/lib/sanitize.js');
    var current = this;
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));
    app.import(app.bowerDirectory + '/sanitize.js/lib/sanitize.js');
  }

};
