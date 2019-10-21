global.$ = {
    gulp: require( 'gulp' ),
    GP: require( 'gulp-load-plugins' )(),
    plumber: require( 'gulp-plumber' ),
    sourcemaps: require( 'gulp-sourcemaps' ),
    sass: require( 'gulp-sass' ),
    csso: require( 'gulp-csso' ),
    babel: require( 'gulp-babel' ),
    concat: require( 'gulp-concat' ),
    uglify: require( 'gulp-uglify' ),
    rename: require( 'gulp-rename' ),
    autoprefixer: require( 'gulp-autoprefixer' ),
    browserSync: require( 'browser-sync' ).create(),
    del: require( 'del' ),
    imageminJpegRecompress: require( 'imagemin-jpeg-recompress' ),
    imagemin: require( 'gulp-imagemin' ),
    webp: require('gulp-webp'),
    svgmin: require( 'gulp-svgmin' ),
    cheerio: require( 'gulp-cheerio' ),
    svgSprite: require( 'gulp-svg-sprite' ),
    Rreplate: require( 'gulp-replace' ),
    pngquant: require( 'imagemin-pngquant' ),
    path: {
        config: require( './gulp/config' ),
        jquery: './js/jquery.js',
        js: './js/**/*.js',

    }
};

$.path.config.forEach( function ( path ) {
    require(path)();
} );
