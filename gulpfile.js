var gulp = require('gulp'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

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
    styles: 'build/styles/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  watch: {
    all: 'src/**/*.*',
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    scss: 'src/styles/**/*.scss',
    less: 'src/styles/**/*.less',
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
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(routes.build.js));
});

function jumpOverError (error) {
  console.log('this is me: ', error.toString());
  this.emit('end');
}

gulp.task("less", function() {
    gulp.src("src/styles/*.less")
//      .pipe(sourcemaps.init())
      .pipe(less())
      .on('error', jumpOverError)
//      .pipe(sourcemaps.write())
      .pipe(gulp.dest(routes.build.styles))
});

gulp.task("watch", function() {
  watch([routes.watch.all], function(event, callback) {
    gulp.start('default');
  });

  watch([routes.watch.less], function(event, callback) {
    gulp.start('less');
  });
});
