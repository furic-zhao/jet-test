/**
 * Copyright (c) 2020, chanjet-fe, created by furic-zhao.
 * Based on react-scripts but adds a bunch of useful features.
 */
'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  babelrc: false,
  configFile: false,
});
