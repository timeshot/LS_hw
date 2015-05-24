var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn");

// Server start

gulp.task('connect', function() {
   connect.server({
       root:'app',
       livereload: true,
       port: 8888

   });

    opn('http://localhost:8888');
});

// HTML

gulp.task('reload_html', function(){
   gulp.src('./app/*.html')
       .pipe(connect.reload());

});

// CSS

gulp.task('reload_css', function(){
    gulp.src('./app/css/*.css')
        .pipe(connect.reload());

});

// JS

gulp.task('reload_js', function(){
    gulp.src('./app/js/*.js')
        .pipe(connect.reload());

});

// Follow up / Watching

gulp.task('watch', function(){
    gulp.watch(['./app/*.html'],['reload_html']);
    gulp.watch(['./app/css/*.css'],['reload_css']);
    gulp.watch(['./app/js/*.js'],['reload_js']);
});


// Default task
gulp.task ('default', ['connect','watch']);