const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp')
const gulpIf = require('gulp-if');
const useref = require('gulp-useref');
const del = require('del');
const dest = require('dest');

function browser_sync(done) {
  browserSync.init( {
    server: {
      baseDir: 'project'
    }
  });
  done();
}

function watch_files(done) {
  gulp.watch('project/css/**/*.css', reload);
  gulp.watch('project/*.html', reload);
  gulp.watch('project/js/**/*.js', reload);
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}
// working on building js, css and image minifications ** add clean before
// building minifications ...

function mini() {
  return gulp
    .src('project/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
}

gulp.task('useref', mini);
gulp.task('watch', gulp.series(browser_sync, watch_files));
