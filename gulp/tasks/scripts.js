const jsFile = [
    $.path.jquery,
    $.path.js
];
module.exports = function () {
    $.gulp.task( 'scripts', function () {
        return $.gulp.src( jsFile )
            .pipe( $.plumber() )
            .pipe( $.sourcemaps.init() )
            .pipe( $.babel({
                presets: ['@babel/preset-env']
            }) )
            .pipe( $.concat('all.js'))
            .pipe( $.uglify() )
            .pipe( $.rename( 'all.min.js' ) )
            .pipe( $.sourcemaps.write( '' ) )
            .pipe( $.gulp.dest( 'build/js' ) )
            .pipe( $.browserSync.stream() );
    } );
};
