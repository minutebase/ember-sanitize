# ember-sanitize

An Ember CLI addon to sanitize user provided content using [sanitize.js](https://github.com/gbirke/Sanitize.js).

## Using

### Installation

Install this addon via npm:

```
npm install --save-dev ember-sanitize
```

Then run the generator to install `sanitize.js`:

```
ember generate ember-sanitize
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

## Developing

### Installation

```
ember install my-addon
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests
* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions


### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
