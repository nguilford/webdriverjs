var merge = require('lodash.merge');

var env = process.env.TRAVIS && process.env._BROWSER !== 'phantomjs' ? 'travis-ci' : 'local';

var defaults = require('./defaults.js');
var asked = require('./' + env + '.js');

module.exports = merge(defaults, asked);