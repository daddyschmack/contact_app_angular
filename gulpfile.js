var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    return sass('./source/sass/*.scss', {sourcemap:true})
        .on('error',function(err){
            console.error('Error!',err.message)
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest('public/css'));
});

gulp.task('watch',function(){
    //watch scss files
    gulp.watch('./source/**/*.scss',['sass']);
});

gulp.task('browser-sync',function(){
    var files=[
        'public/*.html',
        //'css/**/*/*.*',
        'public/css/*.css',
        'public/images/**/*.*',
        'public/scripts/**/*.js'
    ];

    browserSync.init(files,{
        server:{
            baseDir:'.'
        }
    });
});

gulp.task('default',['watch','browser-sync']);
