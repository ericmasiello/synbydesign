// See https://www.liquidlight.co.uk/blog/article/creating-svg-sprites-using-gulp-and-sass/
const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const paths = {
  src: 'artwork/',
  dest: 'views/',
};

gulp.task('default', () => gulp.src(`${paths.src}**/*.svg`)
  .pipe(svgSprite({
    mode: {
      css: {
        dest: './',
        sprite: 'sprite.svg',
        bust: false,
      },
    },
  }))
  .pipe(gulp.dest(paths.dest)));
