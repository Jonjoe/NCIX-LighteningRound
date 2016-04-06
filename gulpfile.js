// SYSTEM
const gulp       = require("gulp");
const livereload = require('gulp-livereload');

gulp.task('reload', function () {
  return gulp
    .src("./*")
    .pipe(livereload());
});

// WATCHING
gulp.task("watch", function() {
  livereload.listen(); // Start livereload server
  gulp.watch("./*", ["reload"]); // Watch all
});

gulp.task("default", [
  "watch"
]);