var gulp = require('gulp'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var routes = {
	src: {
    root: 'src/*.html',
    js: 'src/js/main.js',
    style: 'src/style/main.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  build: {
    root: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  watch: {
    all: 'src/**/*.*',
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

gulp.task("default", function () {
  gulp.src('src/*.*')
    .pipe(gulp.dest(routes.build.root));

  gulp.src("src/js/*.js")
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest(routes.build.js));
});

gulp.task("watch", function() {
  watch([routes.watch.all], function(event, callback) {
    gulp.start('default');
  });
});
