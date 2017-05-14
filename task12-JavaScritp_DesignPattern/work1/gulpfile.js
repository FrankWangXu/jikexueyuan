'use strict';

// 在gulpfile中先载入gulp包，因为这个包提供了一些API
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');

// cSS编译 压缩 --合并没有必要，一般预处理CSS都可以导包
gulp.task('style', function() {
  // 这里是在执行style任务时自动执行的
  gulp.src(['src/css/*.css', '!src/styles/_*.css'])
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));
});

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// 2. JS合并 压缩混淆
gulp.task('script', function() {
  gulp.src('src/js/*.js')
    .pipe(concat('logn.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// 3. 图片复制
gulp.task('image', function() {
  gulp.src('src/img/*.*')
    .pipe(gulp.dest('dist/img'));
});

var htmlmin = require('gulp-htmlmin');
// 4. HTML
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
});
