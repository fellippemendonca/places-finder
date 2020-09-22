'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  diff: true,
  extension: ['js'],
  opts: false,
  package: './package.json',
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: './junit.xml'
  },
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  'watch-files': ['src/**/*.js', '__test__/*.js'],
  'watch-ignore': ['node_modules'],
};
