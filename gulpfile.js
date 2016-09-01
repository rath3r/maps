'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  twig = require('gulp-twig'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  open = require('gulp-open'),
  os = require('os'),
  fs = require('fs'),
  packagejson = JSON.parse(fs.readFileSync('./package.json')),
  privatejson = JSON.parse(fs.readFileSync('./private.json')),
  files = fs.readdirSync('./data/xml'),
  browser;

//console.log(files);

browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'Google Chrome' : (
    os.platform() === 'win32' ? 'chrome' : 'firefox'
  )
);


gulp.task('webserver', function() {
  connect.server({
      livereload: true,
      root: ['dist']
  });
});

gulp.task('livereload', function() {
  gulp.src([
      'assest/styles/*.less',
      'views/*.twig'
    ]).pipe(watch())
    .pipe(connect.reload());
});

gulp.task('clean', function () {
    gulp.src('dist/*', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('twig', function () {
    return gulp.src('views/index.twig')
        .pipe(twig({
            data: {
                title: packagejson.name,
                author: packagejson.author,
                googleMaps: privatejson.googleMaps,
                benefits: [
                    'Fast',
                    'Flexible',
                    'Secure'
                ],
                files: files
            }
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('less', function() {
  gulp.src('assets/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('dist/styles'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src([
    'assets/lib/gpxviewer/loadgpx.js',
    'assets/scripts/**/*.js'
  ]).pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(connect.reload());
});

gulp.task('bootstrap', function() {
  return gulp.src('./assets/bower_components/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('xml', function() {
  return gulp.src('./data/xml/*.gpx')
    .pipe(gulp.dest('./dist/xml'));
});

gulp.task('watch', function() {
    gulp.watch('assets/styles/*.less', ['less']);
    gulp.watch('views/**/*.twig', ['twig']);
    gulp.watch('assets/scripts/**/*.js', ['scripts']);
});

gulp.task('open', function(){
  var options = {
    uri: 'localhost:8080',
    app: browser
  };
  gulp.src('./dist/index.html')
    .pipe(open(options));
});

gulp.task('default', [
  'twig',
  'less',
  'scripts',
  'bootstrap',
  'xml',
  'webserver',
  'watch',
  'open'
]);
