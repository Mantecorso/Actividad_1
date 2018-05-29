let gulp = require('gulp'),
browserSync = require('browser-sync'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
cleancss = require('gulp-clean-css'),
rename = require('gulp-rename');

gulp.task('scripts', ()=> {
    return gulp.src('public/javascripts/**/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('public/dist/script'))
    .pipe(rename('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/script'));
})

gulp.task('another', ()=> {
    return gulp.src('/public/stylesheets/**/*.css')
    .pipe(concat('estilos.css'))
    .pipe(gulp.dest('public/dist/css'))
    .pipe(rename('estilos.min.css'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/css'));
})

gulp.task('default', ['another', 'scripts']);
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

gulp.watch('/public/stylesheets/**/*.css').on('change',
()=>{  return gulp.src('public/stylesheets/*.css')
 .pipe(concat('estilos.css'))
 .pipe(gulp.dest('/public/dist/css'))
 .pipe(rename('estilos.min.css'))
 .pipe(uglify())
 .pipe(gulp.dest('/public/dist/css'));}
);

gulp.watch('/public/javascripts/**/*.js').on('change',
()=>{  return gulp.src('/public/javascripts/*.js')
 .pipe(concat('script.js'))
 .pipe(gulp.dest('/public/dist/script'))
 .pipe(rename('script.min.js'))
 .pipe(uglify())
 .pipe(gulp.dest('/public/dist/script'));}
);

gulp.watch('index.html').on('change', ()=>{
    browserSync.reload();
}); 
