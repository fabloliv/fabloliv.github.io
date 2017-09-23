var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('assets/css'))
});

// Gulp watch syntax
gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    // Other watchers
})