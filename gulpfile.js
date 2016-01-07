var gulp = require('gulp');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var reactify = require('reactify');
var htmlMinifier = require('gulp-html-minifier');
var uglify = require('gulp-uglify');

gulp.task('js-development', function () {
    return browserify('./source/js/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(vinylSourceStream('produce-market.js'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('js-production', function () {
    return browserify('./source/js/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(vinylSourceStream('produce-market.js'))
        .pipe(vinylBuffer())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('html-development', function () {
    return gulp
        .src('./source/*.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('html-production', function () {
    return gulp
        .src('./source/*.html')
        .pipe(htmlMinifier({collapseWhitespace: true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
    gulp.watch('./source/js/**/*.jsx', ['js-development']);
    gulp.watch('./source/js/**/Sales/*.jsx', ['js-development']);
    gulp.watch('./source/js/**/*.js', ['js-development']);
    gulp.watch('./source/**/*.html', ['html-development']);
});

gulp.task('build-development', ['js-development', 'html-development']);
gulp.task('build-production', ['js-production', 'html-production']);

gulp.task('default', ['js-development', 'html-development', 'watch']);