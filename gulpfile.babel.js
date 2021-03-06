import gulp from 'gulp';
import babel from 'gulp-babel'
import i18nFormatter from './src/index';

gulp.task('build', () => {
    return gulp.src('./src/index.js')
        .pipe(babel())
        .pipe(gulp.dest('./'));
});

gulp.task('test', () => {
    return gulp.src('./test/Locals.json')
        .pipe(i18nFormatter(['ru_RU', 'en_US']))
        .pipe(gulp.dest('./test/i18n/'));
});

gulp.task('default', ['build']);