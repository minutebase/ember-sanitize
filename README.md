# ember-sanitize

An Ember CLI addon to sanitize user provided content using [sanitize.js](https://github.com/gbirke/Sanitize.js).

## Using

### Installation

Install this addon via npm:

```
ember install ember-sanitize
```

### Usage

Simply use the `sanitize-html` helper in your template:

```handlebars
{{sanitize-html someValue}}
```

This will use the most restrictive sanititizer config by default, which will strip all HTML.

To use your own sanitizer configuration, add a file to `/app/sanitizers/` which exports an object
conforming to [sanitizer's configuration options](https://github.com/gbirke/Sanitize.js#configuration).

For example:

```js
// /app/sanitizers/strict.js
export default {
  elements: ['b', 'em', 'i', 'strong', 'u']
};
```

You can then use this configuration by passing it in as the second argument to the helper:

```handlebars
{{sanitize-html someValue "strict"}}
```

If you want to include one of the [configurations that ship with `Sanitize.js`](https://github.com/gbirke/Sanitize.js/tree/master/lib/sanitize/config), you can configure the addon to import them:

```javascript
// ember-cli-build.js
...
let app = new EmberApp(defaults, {
  ...
  'ember-sanitize': {
    importConfig: [
      'relaxed'
    ]
  }
  ...
});
...
```

## Developing

### Installation

* `git clone` this repository
* `yarn install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`
