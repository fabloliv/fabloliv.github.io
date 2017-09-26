var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    //gulp.watch('assets/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})