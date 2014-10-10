# > karma-esperanto-preprocessor

> Preprocessor to compile ES6 modules using [esperanto]().

## Installation

The easiest way is to keep `karma-esperanto-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.12",
    "karma-esperanto-preprocessor": "~0.1"
  }
}
```

You can easily add it by doing:
```bash
npm install karma-esperanto-preprocessor --save-dev
```

## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.js': ['esperanto']
    },

    esperantoPreprocessor: {
      options: {
        defaultOnly: true
      }
    }
  });
};
```

You can set the `defaultOnly` option, which is passed directly to [esperanto]().

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com
