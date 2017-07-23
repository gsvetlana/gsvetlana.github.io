'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

var path = {
    src: {
        html: 'src/*.html',
        css: 'src/style/*.scss',
        js: 'src/js/**/*.js',
        fonts: 'src/fonts/**/*.*',
        img: 'src/img/**/*.+(png|jpg|gif|svg)'
    },
    public: {
        html: 'public',
        css: 'public/css',
        js: 'public/js',
        fonts: 'public/fonts',
        img: 'public/img'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: 'public'
};

var config = {
    server: {
        baseDir: "./public"
    },

    host: 'localhost',
    port: 9000,
    logPrefix: "HW",
    notify: false
};

gulp.task('htmlBuild', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.public.html))
        .pipe(reload({stream: true}));
});

gulp.task('cssBuild', function() {
    return gulp.src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.public.css))
        .pipe(reload({stream: true}));
});


gulp.task('jsBuild', function() {
    return gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.public.js))
        .pipe(reload({stream: true}));
});

gulp.task('fontsBuild', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.public.fonts));
});

gulp.task('imgBuild', function() {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.public.img))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'htmlBuild',
    'cssBuild',
    'jsBuild',
    'fontsBuild',
    'imgBuild'
]);

gulp.task('watch', function() {
    gulp.watch(path.watch.html, ['htmlBuild']);
    gulp.watch(path.watch.js, ['jsBuild']);
    gulp.watch(path.watch.style, ['cssBuild']);
    gulp.watch(path.watch.img, ['imgBuild']);
    gulp.watch(path.watch.fonts, ['fontsBuild']);
});

gulp.task('clean:public', function() {
    return del.sync(path.clean);
});

gulp.task('webServer', function () {
    browserSync(config);
});

gulp.task('start', ['clean:public', 'build', 'webServer', 'watch']);






