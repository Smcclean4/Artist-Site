const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp')
const gulpIf = require('gulp-if');

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
// working on building js, css and image minifications
function css() {
  return gulp
    .src('project/css/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
}

function eff(done) {
  return gulp.src('project/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
}

gulp.task('useref', gulp.series(eff));
gulp.task('watch', gulp.series(browser_sync, watch_files));
