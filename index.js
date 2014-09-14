module.exports = {
  name: 'ember-sanitize',

  included: function(app) {
    this._super.included(app);
    this.app.import('bower_components/sanitize.js/lib/sanitize.js');
  }

};
