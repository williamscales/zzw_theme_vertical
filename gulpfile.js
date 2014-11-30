'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var less = require('gulp-less');

gulp.task('mainBowerFiles', function() {
    return gulp.src(mainBowerFiles(), {'base': 'bower_components'})
        .pipe(gulp.dest('gulp_build'));
});

gulp.task('bootstrap:prepareStaticFiles', function() {
    return gulp.src(mainBowerFiles(), {'base': 'bower_components'})
        .pipe(gulp.dest('static'));
});

gulp.task('bootstrap:prepareLess', ['mainBowerFiles'], function() {
    return gulp.src('less/*.less')
        .pipe(gulp.dest('gulp_build/bootstrap/less'));
});

gulp.task('bootstrap:compileLess',
    ['bootstrap:prepareLess', 'bootstrap:prepareStaticFiles'],
    function() {
        return gulp.src('gulp_build/bootstrap/less/bootstrap.less')
            .pipe(less())
            .pipe(gulp.dest(
                'static/bootstrap/dist/css'));
    }
);

gulp.task('watch', function() {
    gulp.watch('less/*.less',
        ['bootstrap:compileLess']);
});
