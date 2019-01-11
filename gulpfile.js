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

function watch_file(done) {
  
}
