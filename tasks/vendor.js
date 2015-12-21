var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp

gulp.task('vendor', function () {
	return gulp.src(['src/assets/vendor/**'])
		.pipe(gulp.dest('public/assets/vendor/'));
});
