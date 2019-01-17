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
// work in progress
gulp.task('watch', gulp.series(browser_sync, function() {
  gulp.watch('project/**/*.css', browserSync.reload());
  gulp.watch('project/*.html', browserSync.reload());
  gulp.watch('project/**/*.js', browserSync.reload());
}));
// tomorrow figure out how to keep it watching files and syncing with browser
