const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

gulp.task('default', () =>
  gulp
    .src('src/images/**/*')
    .pipe(
      imagemin([
        imageminMozjpeg({
          quality: 85,
        }),
        imageminPngquant({
          quality: '60-80',
          speed: 1,
        }),
        imagemin.svgo(),
        imagemin.gifsicle(),
      ])
    )
    // imageminPngquant()で付与されたガンマ情報をimageminのoptipngで除去する
    .pipe(imagemin())
    .pipe(gulp.dest('docs/images'))
);
