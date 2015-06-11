var dest = './static',
  src = '.',
  mui = './node_modules/material-ui/src';

module.exports = {
  watch: {
    src: src + "/app/**"
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'scripts/app.js'
    }]
  }
};