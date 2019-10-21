// module.exports = function () {
//     $.gulp.task( 'images', function () {
//         return $.gulp.src( 'img/**/*.{jpg,png,svg}' )
//             .pipe( $.imagemin( [
//                 $.imagemin.jpegtran( { progressive: true } ),
//                 $.imageminJpegRecompress( {
//                     loops: 5,
//                     min: 65,
//                     max: 70,
//                     quality: 'medium'
//                 } ),
//                 $.imagemin.optipng( { optimizationLevel: 3 } ),
//                 $.pngquant( { quality: '65-70', speed: 5 } ),
//                 $.imagemin.svgo()
//             ] ) )
//             .pipe( $.gulp.dest( 'build/img' ) );
//     } );
// };
module.exports = function () {
    $.gulp.task( 'images', function () {
        return $.gulp.src( 'build/img/**/*.{png,jpg,svg}' )
            .pipe( $.imagemin(
                [ $.imagemin.jpegtran( { progressive: true } ) ],
                [ $.imageminJpegRecompress( {
                    loops: 5,
                    min: 65,
                    max: 70,
                    quality: 'medium'
                } ) ],
                [ $.imagemin.optipng( { optimizationLevel: 3 } ) ],
                [ $.pngquant( { quality: '65-70', speed: 5 } ) ],
                [ $.imagemin.svgo() ]
            ) )
            .pipe( $.gulp.dest( 'build/img' ) );
    } );
};
