var gulp = require('gulp');
var typescript = require('gulp-typescript');

var merge = require('merge2');
var rimraf = require('rimraf');

var project = typescript.createProject('tsconfig.json');

gulp.task('build', ['clean'], function () {
  var result = project.src()
    .pipe(typescript(project));

  merge([result.js, result.dts])
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function (cb) {
  rimraf('./dist', cb);
});
