var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var rename      = require('gulp-rename');
var babel       = require('gulp-babel');
var plumber     = require('gulp-plumber');

// Basic usage
gulp.task('build', function () {
    // Single entry point to browserify
    gulp.src(['./jsx/app.jsx'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(
            browserify(
                {
                    insertGlobals: true,
                    debug: true,
                    transform: 'reactify',
                    paths: ['./node_modules', './jsx', './js']

                }
            )
        )
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./assets/bundles'));
});
gulp.watch(['./jsx/app.jsx', './jsx/**/*.jsx', './js/**/*.js'], ['build']);
gulp.task('default', ['build']);
