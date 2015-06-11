
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
*/

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'build'], function() {
  gulp.watch(config.watch.src);
});