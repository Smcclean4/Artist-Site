var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('project/css/**/*.css', browserSync.reload);
  gulp.watch('project/*.html', browserSync.reload);
  gulp.watch('project/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
        baseDir: 'project'
    },
  })
});
