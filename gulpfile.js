let gulp = require('gulp'),
//browserSync = require('browser-sync'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
cleancss = require('gulp-clean-css'),
rename = require('gulp-rename');

gulp.task('scripts', ()=> {
    return gulp.src('./public/javascripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/dist/javascripts'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/javascripts'));
})

gulp.task('stylesheets', ()=> {
    return gulp.src('./public/stylesheets/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./public/dist/css'))
    .pipe(rename('main.min.css'))
    .pipe(cleancss())
    .pipe(gulp.dest('./public/dist/css'));
})

gulp.task('default', ['stylesheets', 'scripts']);
//gulp.task('browser', ()=> {
//    browserSync.init({
//        server: {
//            basedir: "./"
//        }
//    });
//});


//tarea para minificar//

//gulp.task('min', ()=> {
//    return gulp.src('js/app.js')
//    .pipe(uglify())
//    .pipe(gulp.dest('js/app.min.js'))
//});

gulp.watch('./public/stylesheets/**/*.css').on('change',
()=>{  return gulp.src('./public/stylesheets/*.css')
 .pipe(concat('main.css'))
 .pipe(gulp.dest('./public/dist/css'))
 .pipe(rename('main.min.css'))
 .pipe(cleancss())
 .pipe(gulp.dest('./public/dist/css'));}
);

gulp.watch('./public/javascripts/**/*.js').on('change',
()=>{  return gulp.src('./public/javascripts/*.js')
 .pipe(concat('main.js'))
 .pipe(gulp.dest('./public/dist/javascripts'))
 .pipe(rename('main.min.js'))
 .pipe(uglify())
 .pipe(gulp.dest('./public/dist/javascripts'));}
);

//gulp.watch('index.html').on('change', ()=>{
//    browserSync.reload();
//}); 
