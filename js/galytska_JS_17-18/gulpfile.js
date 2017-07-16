'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rigger = require('gulp-rigger'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');

var path = {
    src: {
        html: 'src/*.html',
        style: 'src/sass/main.scss',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    public: {
        html: 'public/',
        css: 'public/css/',
        js: 'public/js/',
        img: 'public/img/',
        fonts: 'public/fonts/'
    },

    watch: {
        html: 'src/**/*.html',
        style: 'src/sass/**/*.scss',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './public'
};

var serverConfig = {
    server: {
        baseDir: './public'
    },

    notify: false,
    tunnel: true,
    host: 'localhost',
    port: 9000
};

gulp.task('build-sass', function () {
    return gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(path.public.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build-html', function() {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.public.html))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build-js', function() {
    return gulp.src(path.src.js)
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: ['env']
        }))
        // .pipe(uglify())
        .pipe(gulp.dest(path.public.js))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build-fonts', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.public.fonts));
});

gulp.task('watch', function () {
    gulp.watch(path.watch.style, ['build-sass']);
    gulp.watch(path.watch.html, ['build-html']);
    gulp.watch(path.watch.js, ['build-js']);
    gulp.watch(path.watch.fonts, ['build-fonts']);
});

gulp.task('webServer', function () {
    browserSync(serverConfig);
});

gulp.task('clean:public', function () {
    return del.sync(path.clean);
});

gulp.task('start', ['clean:public', 'build-html', 'build-sass', 'build-js', 'build-fonts', 'webServer', 'watch']);









