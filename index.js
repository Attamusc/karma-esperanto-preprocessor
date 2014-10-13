var esperanto = require('esperanto');
var typeMap = {
  amd: 'toAmd',
  cjs: 'toCjs'
};

var createEsperantoPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.esperanto');
  var defaultOptions = {
    type: 'amd',
  };

  var options = helper.merge(defaultOptions, args.options || {}, config.options || {});
  var conversionFn = typeMap[options.type];

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    return done(null, esperanto[conversionFn](content));
  };
};

createEsperantoPreprocessor.$inject = ['args', 'config.esperantoPreprocessor', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:esperanto': ['factory', createEsperantoPreprocessor]
};
