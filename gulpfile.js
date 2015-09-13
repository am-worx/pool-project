var gulp = require("gulp"),
		babel = require("gulp-babel"),
		watch = require("gulp-watch");

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

gulp.task("watch", function() {
  watch([routes.watch.all], function(event, callback) {
        gulp.start('default');
    });
});

gulp.task("default", function () {
  gulp.src('src/*.*')
    .pipe(gulp.dest(routes.build.root));

  gulp.src("src/js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("build/js"));
});