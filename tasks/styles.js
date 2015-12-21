var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('styles', function () {
	return gulp.src([
		'src/assets/less/mixin.less',
		'src/assets/less/reset.less',
		'src/assets/less/fonts.less',
		'src/assets/less/sprite.less',
		'src/assets/less/**/*.less'
	])
		.pipe($.concat('style.css')) // Объединяем в один файл
		.pipe($.less()) // Запускаем less
		.on('error', function (err) {console.log(err.message);this.emit('end');})
		.pipe($.csso()) // Минификация
		.on('error', function (err) {console.log(err.message);this.emit('end');})
		.pipe(gulp.dest('public/assets/css/')) // Путь до компилированных стилей
		.pipe($.connect.reload()); // перезагрузка сервера
});
