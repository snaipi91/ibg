var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp

gulp.task('data', function () {
	return gulp.src(['src/data/**'])
		.pipe(gulp.dest('public/data'));
});
