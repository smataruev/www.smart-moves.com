module.exports = function () {
    $.gulp.task( 'sass', function () {
        return $.gulp.src( 'sass/style.scss' )
            .pipe( $.plumber() )
            .pipe( $.sourcemaps.init() )
            .pipe( $.sass() )
            // .pipe( $.autoprefixer( {
            //     browsers: [ 'last 2 versions' ]
            // } ) )
            .pipe( $.csso() )
            .pipe( $.rename( 'style.min.css' ) )
            .pipe( $.sourcemaps.write( '' ) )
            .pipe( $.gulp.dest( 'build/css' ) )
            .pipe( $.browserSync.stream() );
    } );
};
