/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-sanitize',

  options: {
    nodeAssets: {
      sanitize: {
        vendor: [
          'lib/sanitize.js',
          'lib/sanitize/config/*'
        ]
      }
    }
  },

  included(parent) {
    const addonOptions = parent.options && parent.options['ember-sanitize'] || {};
    const includedConfigs = addonOptions.importConfig || [];

    this._super.included.apply(this, arguments);

    this.import('vendor/sanitize/lib/sanitize.js');

    for (const config of includedConfigs) {
      this.import(`vendor/sanitize/lib/sanitize/config/${config}.js`);
    }
  }
};
