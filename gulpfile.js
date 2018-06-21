var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function() {
  gulp.src('styles.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch('styles.css', ['styles']);
});

