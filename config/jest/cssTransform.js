/**
 * Copyright (c) 2020, chanjet-fe, created by furic-zhao.
 * Based on react-scripts but adds a bunch of useful features.
 */
'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
