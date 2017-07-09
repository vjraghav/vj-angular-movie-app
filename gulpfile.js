var gulp = require('gulp');
var fs = require('fs');
var utils = require('./gulp/utils');

fs.readdirSync('./gulp/tasks/')
    .filter(utils.onlyScripts)
    .forEach(function (task) {
        require('./gulp/tasks/' + task);
    });
	
gulp.task('copy:images', function () {
     return gulp
             .src('./images/**')
             .pipe(gulp.dest('dist/images'));
});

gulp.task('build', [
    'clean',
	'copy:images',
    'copy:src',
    'compact:js',
    'compact:html',
    'less',
    'deps:js',
    'deps:fonts'
]);

gulp.task('default', [
    'build',
    'connect',
    'copy:watch',
    'compact:watch',
    'less:watch'
]);
