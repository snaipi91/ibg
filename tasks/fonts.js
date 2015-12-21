var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp

gulp.task('fonts', function () {
	return gulp.src(['src/assets/fonts/*'])
		.pipe(gulp.dest('public/assets/fonts'));
});
