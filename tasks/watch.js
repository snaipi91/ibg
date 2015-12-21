var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('watch', ['sprite_create', 'styles', 'scripts', 'templates', 'images', 'fonts', 'vendor', 'data'], function() {
	gulp.watch('src/assets/images/sprite/*', ['sprite_create']);
	gulp.watch('src/assets/js/*.js', ['scripts']);
	gulp.watch('src/assets/less/**/*.less', ['styles']);
	gulp.watch('src/assets/images/*', ['images']);
	gulp.watch('src/assets/fonts/*', ['fonts']);
	gulp.watch('src/assets/vendor/*', ['vendor']);
	gulp.watch('src/data/**', ['data']);
	gulp.watch('src/data/images/*', ['data']);
	gulp.watch([
		'src/templates/layouts/*.html',
		'src/templates/partials/*.html',
		'src/templates/**/*.html'
	], ['templates']);
});
