var sassport = require('gulp-sassport');
var sassportSVG = require('../index.js');
var gulp = require('gulp');

gulp.task('styles', function() {
  gulp.src('./svg.scss')
    .pipe(sassport([ sassportSVG ], {
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(''));
});