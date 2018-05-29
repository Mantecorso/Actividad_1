let gulp = require('gulp'),
browserSync = require('browser-sync'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
cleancss = require('gulp-clean-css'),
rename = require('gulp-rename');

gulp.task('scripts', ()=> {
    return gulp.src('js/**/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/script'))
    .pipe(rename('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/script'));
})

gulp.task('another', ()=> {
    return gulp.src('css/**/*.css')
    .pipe(concat('script.css'))
    .pipe(rename('script.min.css'))
    .pipe(uglify())
    .pipe(gulp.dest('css/app.css'));
})

gulp.task('default', ['browser', 'scripts']);
gulp.task('browser', ()=> {
    browserSync.init({
        server: {
            basedir: "./"
        }
    });
});


//tarea para minificar//

//gulp.task('min', ()=> {
//    return gulp.src('js/app.js')
//    .pipe(uglify())
//    .pipe(gulp.dest('js/app.min.js'))
//});

gulp.watch('./css/**/*.css').on('change',
()=>{  return gulp.src('css/**/*.css')
 .pipe(concat('script.css'))
 .pipe(gulp.dest('dist/script'))
 .pipe(rename('script.min.css'))
 .pipe(uglify())
 .pipe(gulp.dest('dist/script'));}
);

gulp.watch('./js/**/*.js').on('change',
()=>{  return gulp.src('js/**/*.js')
 .pipe(concat('script.js'))
 .pipe(gulp.dest('dist/script'))
 .pipe(rename('script.min.js'))
 .pipe(uglify())
 .pipe(gulp.dest('dist/script'));}
);

gulp.watch('index.html').on('change', ()=>{
    browserSync.reload();
}); 
