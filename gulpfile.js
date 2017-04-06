var gulp = require('gulp');
var fs = require('fs');
var s3 = require("gulp-s3");
var run = require('gulp-run');

//aws = JSON.parse(fs.readFileSync('./aws.json'));
var static_options = { headers: {'Cache-Control': 'max-age=315360000, no-transform, public'}, uploadPath: 'static/' }
var index_options = { headers: {'Cache-Control': 'max-age=315360000, no-transform, public'} }

gulp.task('deploy', function() {
  // gulp.src('./static/**')
  //   .pipe(s3(aws,static_options));

  // gulp.src('./index.html')
  //   .pipe(s3(aws,index_options));

  //run('scp -i ~/.ssh/dtd.pem -r static ubuntu@ec2-50-112-30-134.us-west-2.compute.amazonaws.com:/www/webapp/spartan').exec().pipe(gulp.dest('output'));
  //run('scp -i ~/.ssh/dtd.pem run.sh config.ru Gemfile index.html ubuntu@ec2-50-112-30-134.us-west-2.compute.amazonaws.com:/www/webapp/spartan').exec().pipe(gulp.dest('output'));
});