var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('templates_create', function () {
	return gulp.src('src/templates/*.html')
		.pipe($.htmlExtend({annotations: false, verbose: false}))
		.pipe(gulp.dest('public/'))
});

gulp.task('templates', ['templates_create'], function() {
	return gulp.src(['public/*.html'])
		.pipe($.htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('public'))
		.pipe($.connect.reload());
});