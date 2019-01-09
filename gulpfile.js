const gulp = require('gulp');
const css = require('cssnano');
const rename = require('gulp-rename');

function cssMin(done) {
  return src('project/**/*.css')
      .pipe(css())
      .pipe(rename({extname: '.min.css'}))
      .pipe(dest('dist'))
  done();
}

var watcher = watch('project/**/*.css', cssMin);

exports.watch = watcher;
